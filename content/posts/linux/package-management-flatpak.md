---
title: "Package Management - Flatpak"
date: 2023-03-01T08:47:11+01:00
description: Linux notes
draft: false
categories:
  - Linux
tags:
  - Package Management
  - flatpak
  - flathub
---

## Only allow flathub verified apps to run

```bash
flatpak remote-add --if-not-exists --subset=verified flathub-verified https://flathub.org/repo/flathub.flatpakrepo
flatpak remote-delete flathub
```

Note: removing this will prompt you to remove all installed apps.

## Allow whitelisted packages

```bash
git clone git@github.com:credfeto/credfeto-flatpak-filter.git
sudo flatpak remote-add --if-not-exists --filter=/home/markr/work/personal/credfeto-flatpak-filter/flatpak.filter flathub-whitelist https://flathub.org/repo/flathub.flatpakrepo
```

## Downgrading flatpack packages

Based on [this article](https://itsfoss.com/downgrade-flatpak-packages/).

Get versions of the installed package:

```bash
flatpak remote-info --log flathub-verified us.zoom.Zoom
```

```bash
sudo flatpak update --commit=<commit_hash> <Application ID>
```

### Preventing package from being updated

Mask the package:

```bash
sudo flatpak mask us.zoom.Zoom
```

Unmask the package:

```bash
sudo flatpak mask us.zoom.Zoom --remove
```
