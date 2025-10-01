---
title: "systemd-homed"
date: 2025-10-01T17:56:01+00:00
description: Configuring systemd-homed
draft: false
categories:
  - Linux
  - systemd
  - systemd-homed
  - users
tags:
  - systemd
  - systemd-homed
  - users
---

# systemd-homed

## Create user

## Update authorised SSH Keys for a user

```bash
sudo sudo homectl update $USER --ssh-authorized-keys=@$HOME/.ssh/authorized_key
```
