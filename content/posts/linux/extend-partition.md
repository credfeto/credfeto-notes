---
title: "Extending Partition"
date: 2023-10-25T14:15:01+00:00
description: Extending Partition
draft: false
categories:
  - Linux
  - AWS
  - EC2
tags:
  - Disk
  - growpart
  - resize2fs
  - xfs_growfs
  - btrfs
---
# Extending partition

See [Aws](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recognize-expanded-volume-linux.html)

## Resize partition

```bash
sudo growpart /dev/nvme0n1 1
```

### Resize filesystem

### Resize EXT4 in a partition

```bash
sudo resize2fs /dev/nvme0n1p1
```

### Resize XFS in a partition

Where / is the mountpoint

```bash
sudo xfs_growfs -d /
```

### Resize BTRFS in a partition

Where / is the mountpoint

```bash
sudo btrfs filesystem resize +10g /
```
