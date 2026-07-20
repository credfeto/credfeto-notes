---
title: "Configuring firejail"
date: 2023-08-16T18:14:11+01:00
description: Sandboxing with firejail
draft: false
categories:
  - Linux
tags:
  - Sandbox
  - Firejail
---

## Installing

```bash
yay -Sy firejail firejail-handler-extra firejail-handler-http firejail-pacman-hook
```

## Removing

```bash
yay -R firejail firejail-handler-extra firejail-handler-http firejail-pacman-hook
```

## Excluding a program from firejail config

Edit ``/etc/firejail/firecfg.config`` and comment out the name of the program.

Note: Zoom normally needs removing, as it has issues.

## Special cases

### SSH

Contents of `~/.config/firejail/ssh.local`:

```config
whitelist ${RUNUSER}/ssh-agent.*
```

### Spectacle (Wayland)

Contents of `/etc/pacman.d/hooks/unjail-spectacle.hook`:

```config
[Trigger]
Operation = Upgrade
Operation = Install
Operation = Remove
Type = Package
Target = firejail

[Action]
Description = Removing spectacle from jail
When = PostTransaction
Exec = /usr/bin/rm -f /home/markr/.local/share/applications/org.kde.spectacle.desktop
```
