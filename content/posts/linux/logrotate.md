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
#  Logrotate

``logotate.conf`` by default is set up to rotate logs once a week and keep for 4 weeks.  Compression isn't enabled by 
default.  This doesn't work well with small disks with services that are verbose with what is logged.  This sets the 
default configuration so that it is better suited.

note that per service configurations in /etc/logrotate.d/ may also need adjusting.

See [ArchWiki](https://wiki.archlinux.org/title/Logrotate)

note using a file 01-defaults in ``logrotate.d`` means that don't need to worry about updates rewriting the ``logrotate.conf`` file

/etc/logrotate.d/01-defaults:
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
