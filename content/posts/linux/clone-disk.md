---
title: "Disk Cloning"
date: 2023-04-01T15:54:01+00:00
description: Disk cloning
draft: false
categories:
  - Linux
tags:
  - DD
---
# Cloning disk

## Cloning physical disk

copy all on /dev/nvme0n1 to /dev/sda showing progress

```bash
dd if=/dev/nvme0n1 of=/dev/sda bs=64k status=progress
```

## Copying ISO to disk

```bash
dd if=example.iso of=/dev/sda bs=64k status=progress
```
