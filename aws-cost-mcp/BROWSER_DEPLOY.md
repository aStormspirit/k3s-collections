# Deploy entirely from the browser (no CLI)

You do **not** need `wrangler` or a terminal. Everything below happens in the
Cloudflare dashboard. The only file you need is the pre-built bundle:
[`browser-deploy/worker.js`](./browser-deploy/worker.js) — open it on GitHub and
click **"Raw"**, then Ctrl/Cmd-A, Ctrl/Cmd-C to copy all of it.

## 1. Create the Worker

1. Go to <https://dash.cloudflare.com> → **Workers & Pages** → **Create** →
   **Create Worker**.
2. Give it a name (e.g. `aws-cost-mcp`) → **Deploy** (it deploys the default
   "Hello World" for now).
3. Click **Edit code**.
4. Delete everything in the editor, **paste the entire contents** of
   `browser-deploy/worker.js`, then **Deploy** (top right).

## 2. Set the compatibility flag (needed by the AWS SDK)

1. In the Worker page → **Settings** → **Runtime** (or **Settings → General**).
2. **Compatibility date**: set to `2024-09-23` or later.
3. **Compatibility flags**: add `nodejs_compat`.
4. Save.

## 3. Add the keys (this is the part you asked about — all in browser)

Worker page → **Settings** → **Variables and Secrets** → **Add**. Add these
**four**. For the three secret ones choose the **Secret / Encrypt** type so they
're hidden after saving:

| Name | Type | Value |
|------|------|-------|
| `AWS_ACCESS_KEY_ID` | Secret | your **new** key id (starts with `AKIA…`) |
| `AWS_SECRET_ACCESS_KEY` | Secret | your **new** secret |
| `MCP_AUTH_TOKEN` | Secret | a long random string you invent |
| `AWS_REGION` | Text | `us-east-1` |

> Use a **freshly created** key scoped to `ce:GetCostAndUsage` +
> `ce:GetCostForecast` (see the IAM policy in `README.md`). Do **not** use any
> key that was ever pasted into a chat — delete those.

Click **Deploy** again so the new variables take effect.

## 4. Test it (from the browser too)

Your endpoint is `https://aws-cost-mcp.<your-subdomain>.workers.dev/mcp`.

Open `https://aws-cost-mcp.<your-subdomain>.workers.dev/health` in a tab — you
should see `{"ok":true,...}`.

To test a real query without a terminal, use any online "API tester" or the
browser devtools console:

```js
fetch("https://aws-cost-mcp.<your-subdomain>.workers.dev/mcp", {
  method: "POST",
  headers: {
    "authorization": "Bearer YOUR_MCP_AUTH_TOKEN",
    "content-type": "application/json",
  },
  body: JSON.stringify({
    jsonrpc: "2.0", id: 1, method: "tools/call",
    params: {
      name: "get_cost_by_service",
      arguments: { start: "2026-08-01", end: "2026-08-16", granularity: "DAILY" },
    },
  }),
}).then(r => r.json()).then(console.log);
```

## 5. Connect it to Claude

In **claude.ai → Settings → Connectors**, add a custom connector pointing at
your `…/mcp` URL, with header `Authorization: Bearer YOUR_MCP_AUTH_TOKEN`.

---

### If you change the code later

The `browser-deploy/worker.js` file is a **build artifact** generated from
`src/index.ts`. If you edit the source, regenerate it with
`npx wrangler deploy --dry-run --outdir dist` and copy `dist/index.js` over
`browser-deploy/worker.js` — or just deploy with `npx wrangler deploy`.
