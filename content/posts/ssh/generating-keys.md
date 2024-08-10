---
title: "SSH - Generating Keys"
date: 2017-03-26T08:47:11+01:00
description: SSH notes
draft: false
favorite: true
categories:
  - Security
  - SSH
tags:
  - SSH
  - Security
---
# SSH

## Generate an elliptic curve key

See [https://blog.g3rt.nl/upgrade-your-ssh-keys.html](https://blog.g3rt.nl/upgrade-your-ssh-keys.html)

```bash
ssh-keygen -o -a 100 -t ed25519
```
e.g. using a large number of rounds

```bash
ssh-keygen -o -a 1000000000 -t ed25519 -f d:\test_ed
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


## Generate a key compatible with TeamCity

Teamcity requires keys to be in a specific format

```bash
ssh-keygen -t rsa -m PEM -f id_project
```


### Server Setup

/etc/ssh/sshd_config.d/999-security.conf
```ssshd_config
# Only allow latest SSH protocol
Protocol 2

# Ensure root login is disabled
PermitRootLogin no

# Don't trust ~/.ssh/authorized_keys
HostBasedAuthentication no

# Ignore RHosts and Shosts
IgnoreRHosts yes

# no blank passwords
PermitEmptyPasswords no

# Limit auth retries
MaxAuthTries 3

# For example, a user can set a variable to have a process execute a malicious package
PermitUserEnvironment no

# use PAM not password files
UsePAM yes

# No X11 forwarding
X11Forwarding no

# Don't allow port forwarding
AllowTcpForwarding no
```

### User setup
Enable SSHd agent
```bash

systetmctl enable --now sshd-agent
```

Add private key to agent
```bash
ssh-add 'private_key.pub'
```

