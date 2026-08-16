/**
 * aws-cost-mcp
 * -----------------------------------------------------------------------------
 * A stateless remote MCP server (Streamable HTTP transport) that exposes AWS
 * Cost Explorer as a small set of read-only tools. Deployable to Cloudflare
 * Workers.
 *
 * Design decisions (on purpose):
 *  - Uses the AWS SDK, not a shell-out to the `aws` CLI: Workers have no
 *    filesystem/subprocess, and a generic "run any command" tool behind
 *    long-lived credentials on a public URL is a security hazard.
 *  - Exposes only scoped, read-only cost queries.
 *  - Requires a bearer token on every request (MCP_AUTH_TOKEN).
 *  - Credentials are read from encrypted Worker secrets, never from code.
 */

import {
  CostExplorerClient,
  GetCostAndUsageCommand,
  GetCostForecastCommand,
  type Granularity,
} from "@aws-sdk/client-cost-explorer";

interface Env {
  AWS_ACCESS_KEY_ID: string;
  AWS_SECRET_ACCESS_KEY: string;
  AWS_REGION: string;
  MCP_AUTH_TOKEN: string;
}

const PROTOCOL_VERSION = "2025-06-18";
const SERVER_INFO = { name: "aws-cost-mcp", version: "0.1.0" };

// --- JSON-RPC helpers --------------------------------------------------------

type JsonRpcId = string | number | null;

interface JsonRpcRequest {
  jsonrpc: "2.0";
  id?: JsonRpcId;
  method: string;
  params?: Record<string, unknown>;
}

function rpcResult(id: JsonRpcId, result: unknown) {
  return { jsonrpc: "2.0", id, result };
}

function rpcError(id: JsonRpcId, code: number, message: string) {
  return { jsonrpc: "2.0", id, error: { code, message } };
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

// --- Tool definitions --------------------------------------------------------

const TOOLS = [
  {
    name: "get_cost_by_service",
    description:
      "Total AWS cost grouped by service for a date range. Best first call " +
      "to see where money goes. Dates are YYYY-MM-DD; `end` is exclusive.",
    inputSchema: {
      type: "object",
      properties: {
        start: { type: "string", description: "Start date YYYY-MM-DD (inclusive)." },
        end: { type: "string", description: "End date YYYY-MM-DD (exclusive)." },
        granularity: {
          type: "string",
          enum: ["DAILY", "MONTHLY"],
          description: "Defaults to MONTHLY.",
        },
      },
      required: ["start", "end"],
    },
  },
  {
    name: "get_daily_costs",
    description:
      "Total AWS unblended cost per day for a date range (no grouping). Good " +
      "for spotting spikes. Dates are YYYY-MM-DD; `end` is exclusive.",
    inputSchema: {
      type: "object",
      properties: {
        start: { type: "string", description: "Start date YYYY-MM-DD (inclusive)." },
        end: { type: "string", description: "End date YYYY-MM-DD (exclusive)." },
      },
      required: ["start", "end"],
    },
  },
  {
    name: "get_cost_forecast",
    description:
      "Forecasted AWS cost for a FUTURE date range, based on historical usage.",
    inputSchema: {
      type: "object",
      properties: {
        start: { type: "string", description: "Future start date YYYY-MM-DD (inclusive)." },
        end: { type: "string", description: "Future end date YYYY-MM-DD (exclusive)." },
      },
      required: ["start", "end"],
    },
  },
] as const;

// --- AWS client --------------------------------------------------------------

function makeClient(env: Env): CostExplorerClient {
  return new CostExplorerClient({
    region: env.AWS_REGION || "us-east-1",
    credentials: {
      accessKeyId: env.AWS_ACCESS_KEY_ID,
      secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
    },
  });
}

// --- Tool implementations ----------------------------------------------------

async function callTool(
  env: Env,
  name: string,
  args: Record<string, any>,
): Promise<string> {
  const client = makeClient(env);

  switch (name) {
    case "get_cost_by_service": {
      const granularity = (args.granularity ?? "MONTHLY") as Granularity;
      const out = await client.send(
        new GetCostAndUsageCommand({
          TimePeriod: { Start: args.start, End: args.end },
          Granularity: granularity,
          Metrics: ["UnblendedCost"],
          GroupBy: [{ Type: "DIMENSION", Key: "SERVICE" }],
        }),
      );
      const rows = (out.ResultsByTime ?? []).map((r) => ({
        period: r.TimePeriod?.Start,
        services: (r.Groups ?? [])
          .map((g) => ({
            service: g.Keys?.[0],
            amount: Number(g.Metrics?.UnblendedCost?.Amount ?? 0),
            unit: g.Metrics?.UnblendedCost?.Unit,
          }))
          .filter((s) => s.amount > 0)
          .sort((a, b) => b.amount - a.amount),
      }));
      return JSON.stringify(rows, null, 2);
    }

    case "get_daily_costs": {
      const out = await client.send(
        new GetCostAndUsageCommand({
          TimePeriod: { Start: args.start, End: args.end },
          Granularity: "DAILY",
          Metrics: ["UnblendedCost"],
        }),
      );
      const rows = (out.ResultsByTime ?? []).map((r) => ({
        date: r.TimePeriod?.Start,
        amount: Number(r.Total?.UnblendedCost?.Amount ?? 0),
        unit: r.Total?.UnblendedCost?.Unit,
      }));
      const total = rows.reduce((s, r) => s + r.amount, 0);
      const avg = rows.length ? total / rows.length : 0;
      return JSON.stringify(
        { days: rows, total, average_per_day: avg }, null, 2,
      );
    }

    case "get_cost_forecast": {
      const out = await client.send(
        new GetCostForecastCommand({
          TimePeriod: { Start: args.start, End: args.end },
          Granularity: "MONTHLY",
          Metric: "UNBLENDED_COST",
        }),
      );
      return JSON.stringify(
        {
          forecast_total: Number(out.Total?.Amount ?? 0),
          unit: out.Total?.Unit,
        },
        null,
        2,
      );
    }

    default:
      throw new Error(`Unknown tool: ${name}`);
  }
}

// --- MCP JSON-RPC dispatch ---------------------------------------------------

async function handleRpc(env: Env, req: JsonRpcRequest): Promise<unknown | null> {
  const { id = null, method, params = {} } = req;

  switch (method) {
    case "initialize":
      return rpcResult(id, {
        protocolVersion: PROTOCOL_VERSION,
        capabilities: { tools: { listChanged: false } },
        serverInfo: SERVER_INFO,
      });

    // Notifications carry no id and expect no response body.
    case "notifications/initialized":
      return null;

    case "ping":
      return rpcResult(id, {});

    case "tools/list":
      return rpcResult(id, { tools: TOOLS });

    case "tools/call": {
      const name = params.name as string;
      const args = (params.arguments as Record<string, any>) ?? {};
      try {
        const text = await callTool(env, name, args);
        return rpcResult(id, { content: [{ type: "text", text }] });
      } catch (err: any) {
        // Report tool failures as MCP tool errors, not transport errors, so
        // the client sees the message (e.g. AccessDenied from AWS).
        return rpcResult(id, {
          isError: true,
          content: [{ type: "text", text: `AWS error: ${err?.message ?? String(err)}` }],
        });
      }
    }

    default:
      return rpcError(id, -32601, `Method not found: ${method}`);
  }
}

// --- Worker entrypoint -------------------------------------------------------

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (request.method === "GET" && url.pathname === "/health") {
      return json({ ok: true, server: SERVER_INFO });
    }

    if (url.pathname !== "/mcp") {
      return json({ error: "Not found. POST JSON-RPC to /mcp." }, 404);
    }

    // Bearer auth guards the AWS credentials behind this endpoint.
    const auth = request.headers.get("authorization") ?? "";
    const expected = `Bearer ${env.MCP_AUTH_TOKEN}`;
    if (!env.MCP_AUTH_TOKEN || auth !== expected) {
      return json({ error: "Unauthorized" }, 401);
    }

    if (request.method !== "POST") {
      return json({ error: "Method not allowed. Use POST." }, 405);
    }

    let payload: JsonRpcRequest | JsonRpcRequest[];
    try {
      payload = await request.json();
    } catch {
      return json(rpcError(null, -32700, "Parse error"), 400);
    }

    // Support JSON-RPC batches as well as single requests.
    if (Array.isArray(payload)) {
      const responses = (await Promise.all(payload.map((r) => handleRpc(env, r))))
        .filter((r) => r !== null);
      return responses.length ? json(responses) : new Response(null, { status: 202 });
    }

    const response = await handleRpc(env, payload);
    return response === null ? new Response(null, { status: 202 }) : json(response);
  },
};
