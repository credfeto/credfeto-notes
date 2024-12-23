---
title: "ExFat disk format"
date: 2024-12-23T11:23:00+00:00
description: Exfat disk format
draft: false
categories:
  - Linux
tags:
  - Exfat
  - Disks
---
# Exfat

## Required packages

### Ubuntu

```bash
sudo apt install exfat-fuse exfatprogs
```

### Arch

```bash
pacman -S exfatprogs
```


## Formatting

```bash
mkfs.exfat -L Disk_Label /dev/sda1
```