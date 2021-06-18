# SSH

## Generate an elliptic curve key

[See](https://blog.g3rt.nl/upgrade-your-ssh-keys.html)

```bash
ssh-keygen -o -a 100 -t ed25519
```

## Proxy RDP over ssh

Start SSH:

```bash
ssh mark@sshbox -L 9000:machine-to-remote-to:3389
```

Where:
* 'sshbox' is the SSH Proxy
* 9000 is the local port

Connect:

```bash
mstsc /v:localhost:9000
```
