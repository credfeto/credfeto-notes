---
title: "Package Management"
date: 2023-03-01T08:47:11+01:00
description: Linux notes
draft: false
categories:
  - Linux
tags:
  - Package Management
---
# Package Management

## Debian based

### Removing unused packages

``` bash
apt autoremove
```

## Arch based

### Removing unused packages

List what is unused

```bash
pacman -Qdtq
```

Remove all unused

```bash
pacman -Qdtq | pacman -Rs -
```

Remove multi-lib packages:

```bash
pacman -R `LANG=C pacman -Sl multilib | grep installed | cut -d ' ' -f 2`
```

Once done edit ``/etc/pacman.conf`` and comment out the ``[multilib]` section

Re-install all AUR packages
```bash
yay -Sy --rebuildtree --rebuildall $(pacman -Qqme)
```
