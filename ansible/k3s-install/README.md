# k3s-install

Ansible playbook for installing a [k3s](https://k3s.io) cluster (server + agents)
using the official k3s install script.

## Layout

```
ansible/k3s-install/
├── ansible.cfg
├── inventory/hosts.ini      # define your server/agent nodes here
├── playbook.yml             # entry point
└── roles/k3s/
    ├── defaults/main.yml    # k3s version, extra install args, etc.
    └── tasks/
        ├── main.yml         # dispatches to server.yml / agent.yml
        ├── server.yml       # installs k3s server, fetches node token/kubeconfig
        └── agent.yml        # joins an agent node to the server
```

## Usage

1. Edit `inventory/hosts.ini` and put your nodes under `[k3s_server]` and
   `[k3s_agent]` (a single server is enough for a single-node cluster; leave
   `[k3s_agent]` empty if you don't need extra worker nodes).
2. Make sure the inventory user can SSH into the hosts and has sudo rights.
3. Run:

   ```bash
   ansible-playbook playbook.yml
   ```

4. After the run, the server's kubeconfig is fetched locally to
   `./fetched/<server-host>-kubeconfig.yaml`. Update the `server` field in
   that file to point to the server's real address before using it with
   `kubectl`.

## Variables (roles/k3s/defaults/main.yml)

- `k3s_version` — k3s release to install (e.g. `v1.30.5+k3s1`).
- `k3s_server_extra_args` / `k3s_agent_extra_args` — extra flags passed to
  the k3s install script (e.g. `--disable traefik`).
