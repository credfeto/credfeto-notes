---
title: "Logrotate"
date: 2023-02-12T14:30:00+00:00
description: Setting logrotate config for small disks
draft: false
categories:
  - Linux
tags:
  - Logrotate
---

By default, ``logrotate.conf`` rotates logs once a week and keeps them for 4 weeks, with compression disabled. This doesn't work well on small disks with services that log verbosely, so this sets a default configuration that's better suited to that case.

Note that per-service configurations in /etc/logrotate.d/ may also need adjusting.

See the [ArchWiki](https://wiki.archlinux.org/title/Logrotate) for more detail.

Note: using a file `01-defaults` in ``logrotate.d`` means you don't need to worry about updates rewriting the ``logrotate.conf`` file.

Contents of `/etc/logrotate.d/01-defaults`:

```text
# rotate log files daily
daily

# keep 2 weeks worth of backlogs
rotate 14

# restrict maximum size of log files
size 10M

# create new (empty) log files after rotating old ones
create

# uncomment this if you want your log files compressed
compress
compresscmd /usr/bin/zstd
compressext .zst
# maximum compression (uses more memory)
compressoptions -T0 --long --ultra -22
uncompresscmd /usr/bin/unzstd
```
