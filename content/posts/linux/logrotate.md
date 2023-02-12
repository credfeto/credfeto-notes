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

See [ArchWiki](https://wiki.archlinux.org/title/Logrotate)

## /etc/logrotate.conf

```text
# see "man logrotate" for details
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

# Logs are moved into directory for rotation
# olddir /var/log/archive

# Ignore pacman saved files
tabooext + .pacorig .pacnew .pacsave

# Arch packages drop log rotation information into this directory
include /etc/logrotate.d

/var/log/wtmp {
    monthly
    create 0664 root utmp
    minsize 1M
    rotate 1
}

/var/log/btmp {
    missingok
    monthly
    create 0600 root utmp
    rotate 1
}
```