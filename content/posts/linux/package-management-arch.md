---
title: "Package Management - Arch"
date: 2023-03-01T08:47:11+01:00
description: Linux notes
draft: false
categories:
  - Linux
tags:
  - Package Management
  - pacman
---

## Removing unused packages

List unused packages:

```bash
pacman -Qdtq
```

Remove all unused packages:

```bash
pacman -Qdtq | sudo pacman -Rs -
```

Remove multi-lib packages:

```bash
pacman -R `LANG=C pacman -Sl multilib | grep installed | cut -d ' ' -f 2`
```

Once done, edit ``/etc/pacman.conf`` and comment out the ``[multilib]`` section.

Re-install all packages (not AUR):

```bash
pacman -Qqn | sudo pacman -S -
```

Re-install all AUR packages:

```bash
yay -Sy --rebuildtree --rebuildall $(pacman -Qqme)
```

Use Reflector to find the fastest 20 mirrors in the specified country:

```bash
sudo reflector --latest 20 --protocol https --sort rate --save /etc/pacman.d/mirrorlist --country gb``
```

Install reflector with the pacman hook:

```bash
yay -S reflector reflector-pacman-hook-git
```

Edit ``/etc/xdg/reflector/reflector.conf`` to configure the reflector update.

Enable reflector to run at startup (you can also enable reflector.timer to run weekly):

```bash
sudo systemctl enable --now reflector.service
```
