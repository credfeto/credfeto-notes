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
# Package Management - Flatpak

## Only allow flathub verified apps to run

```bash
flatpak remote-add --if-not-exists --subset=verified flathub-verified https://flathub.org/repo/flathub.flatpakrepo
flatpak remote-delete flathub
```

note when removing this will prompt to remove all installed apps 

## Allow whitelisted packages

```bash
git clone git@github.com:credfeto/credfeto-flatpak-filter.git
sudo flatpak remote-add --if-not-exists --filter=/home/markr/work/personal/credfeto-flatpak-filter/flatpak.filter flathub-whitelist https://flathub.org/repo/flathub.flatpakrep
```

## Downgrading flatpack packages

[Based on](https://itsfoss.com/downgrade-flatpak-packages/)

Get versions of installed package
```bash
flatpak remote-info --log flathub-verified us.zoom.Zoom
```

```bash
sudo flatpak update --commit=<commit_hash> <Application ID>
```


### Preventing package from being updated

Mask package
```bash
sudo flatpak mask us.zoom.Zoom
```

Un-Mask package
```bash
sudo flatpak mask us.zoom.Zoom --remove
```
