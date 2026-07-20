---
title: "Configuring firewall with UFW"
date: 2023-04-11T18:14:11+01:00
description: Firewall
draft: false
categories:
  - Linux
tags:
  - Firewall
---

See [this tutorial](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-with-ufw-on-ubuntu-20-04) for more detail.

Set the default policy:

```bash
sudo ufw default deny incoming
sudo ufw default allow outgoing
```

Allow SSH:

```bash
sudo ufw allow ssh
```

Enable UFW:

```bash
sudo ufw enable
sudo systemctl enable --now ufw
```

Check status:

```bash
sudo ufw status verbose
```
