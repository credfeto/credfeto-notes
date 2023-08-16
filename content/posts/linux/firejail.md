---
title: "Configuring firejail"
date: 2023-04-11T18:14:11+01:00
description: Firewalll
draft: false
categories:
  - Linux
tags:
  - Firewall
---
#  Configuring firewall with UFW

## Installing

```bash
yay -Sy firejail firejail-handler-extra firejail-handler-http firejail-pacman-hook
```

## Removing

```bash
yay -R firejail firejail-handler-extra firejail-handler-http firejail-pacman-hook
```

## Excluding a program from firejail config

edit ``/etc/firejail/firecfg.cfg`` and comment out the name of the program
