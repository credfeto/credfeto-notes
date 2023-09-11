---
title: "lsblk"
date: 2023-09-11T22:06:11+01:00
description: lsblk listing volumes
draft: false
categories:
  - Linux
tags:
  - Lsblk
---
#  List block devices with mountpoints and labels.

```bash
sudo lsblk -o name,mountpoint,label,size,uuid
```
