---
title: "Configuring firewall with UFW"
date: 2023-04-11T18:14:11+01:00
description: Firewalll
draft: false
categories:
  - Linux
tags:
  - Firewall
---
#  Configuring firewall with UFW

See [Also](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-with-ufw-on-ubuntu-20-04)

Set default policy

```bash
sudo ufw default deny incoming
sudo ufw default allow outgoing
```

Allow SSH
```bash
sudo ufw allow ssh
```


Enable

```bash
sudo ufw enable
```


Status
```
sudo ufw status verbose
```
