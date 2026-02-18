---
title: "Mounting LUKS encrypted LVM Partition"
date: 2026-02-18T17:42:01+00:00
description: Mounting encrypted volumes in LVM
draft: false
categories:
  - Linux
tags:
  - LUKS
  - LVM
---
# Mounting LUKS encrypted LVM Partition

## Mount LUKS

setup luks for the volume

```bash
sudo cryptsetup luksOpen /dev/sdXN examplename
```

will prompt for password

## Mount LVM

```bash
sudo lvscan
```

Get the device from the lvscan output

```bash
mount /dev/mapper/whatever /mnt -t btrfs -o subvol=@
```