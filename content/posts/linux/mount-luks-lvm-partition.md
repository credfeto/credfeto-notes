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

## Mount LUKS

Set up LUKS for the volume:

```bash
sudo cryptsetup luksOpen /dev/sdXN examplename
```

This will prompt for a password.

## Mount LVM

```bash
sudo pvscan
sudo vgscan --mknodes
sudo lvscan
```

If the volume isn't active:

```bash
sudo vgchange -ay <VolumeGroupName>
```

Get the device name from the `lvscan` output:

```bash
mount /dev/mapper/whatever /mnt -t btrfs -o subvol=@
```
