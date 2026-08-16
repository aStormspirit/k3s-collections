# aws-cost-mcp

A small **remote MCP server** that exposes AWS Cost Explorer as read-only tools,
deployable to **Cloudflare Workers**. Point any MCP client (Claude Desktop,
Cursor, etc.) at it and ask questions like *"what did I spend per day this
month, grouped by service?"* — the model calls the tools, AWS answers.

## Why it's built this way (read before changing it)

- **No `aws` CLI shell-out.** Cloudflare Workers have no filesystem or
  subprocess, so the binary can't run there anyway. This uses the AWS SDK
  (`@aws-sdk/client-cost-explorer`), which gives the same data as `aws ce …`.
- **Scoped, read-only tools only.** There is deliberately no generic
  "run any AWS command" tool. A wildcard exec tool sitting behind long-lived
  credentials on a public URL is how accounts get drained.
- **Credentials live in encrypted Worker secrets**, never in code or git.
- **Every request needs a bearer token** (`MCP_AUTH_TOKEN`) that you invent.
  Without it the endpoint returns 401 — so the URL alone is useless to a
  stranger.

## Tools

| Tool | What it returns |
|------|-----------------|
| `get_cost_by_service` | Cost grouped by service for a date range (best first call) |
| `get_daily_costs` | Cost per day + total + average/day (spot spikes) |
| `get_cost_forecast` | Forecasted cost for a future date range |

## 1. Create a least-privilege AWS key

Do **not** reuse any key that has ever been pasted into a chat, screenshot, or
commit — treat those as compromised and delete them. Create a fresh IAM user
whose only permission is reading Cost Explorer:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["ce:GetCostAndUsage", "ce:GetCostForecast"],
      "Resource": "*"
    }
  ]
}
```

Attach that policy, create an access key for the user, and keep it handy for
the next step. (Also: in the Billing console, enable **"Access to Cost Explorer"**
for IAM if it isn't already.)

## 2. Configure & deploy

```bash
cd aws-cost-mcp
npm install

# Store secrets (encrypted — not in git):
npx wrangler secret put AWS_ACCESS_KEY_ID       # the NEW key id
npx wrangler secret put AWS_SECRET_ACCESS_KEY   # the NEW secret
npx wrangler secret put MCP_AUTH_TOKEN          # invent one: openssl rand -hex 32

npx wrangler deploy
```

Wrangler prints your URL, e.g. `https://aws-cost-mcp.<subdomain>.workers.dev`.
The MCP endpoint is that URL + `/mcp`.

## 3. Local testing (optional)

```bash
cp .dev.vars.example .dev.vars   # fill in the NEW key + a token; never commit it
npx wrangler dev
```

Smoke-test with curl:

```bash
TOKEN=your_mcp_auth_token
curl -s http://localhost:8787/mcp \
  -H "authorization: Bearer $TOKEN" \
  -H "content-type: application/json" \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list"}' | jq

curl -s http://localhost:8787/mcp \
  -H "authorization: Bearer $TOKEN" \
  -H "content-type: application/json" \
  -d '{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"get_cost_by_service","arguments":{"start":"2026-08-01","end":"2026-08-16","granularity":"DAILY"}}}' | jq
```

## 4. Connect an MCP client

For a client that speaks **Streamable HTTP** with a bearer header, e.g.
`~/.config/claude/claude_desktop_config.json` style remote-server config or a
CLI using `mcp-remote`:

```json
{
  "mcpServers": {
    "aws-cost": {
      "command": "npx",
      "args": [
        "mcp-remote",
        "https://aws-cost-mcp.<subdomain>.workers.dev/mcp",
        "--header", "Authorization: Bearer YOUR_MCP_AUTH_TOKEN"
      ]
    }
  }
}
```

Then ask your assistant: *"Using the aws-cost tools, break down my spend by
service for Aug 1–16 with DAILY granularity and tell me the top 3 cost drivers."*

## Security checklist

- [ ] The key you deployed with is **new** and scoped to `ce:Get*` only.
- [ ] Any previously exposed `AKIA…` key has been **deactivated and deleted**.
- [ ] `MCP_AUTH_TOKEN` is long and random, and set as a secret.
- [ ] `.dev.vars` is **never** committed (already in `.gitignore`).
- [ ] Billing alerts / a monthly Budget are enabled as a backstop.

## Notes

- Cost Explorer's API is only served from `us-east-1`; that's why `AWS_REGION`
  defaults there. It reports on your whole account regardless of where
  resources run.
- `ce:GetCostAndUsage` requests are **paid** (about $0.01 each) — cheap, but
  don't hammer it in a loop.
- `end` dates are **exclusive** (AWS convention).
