---
title: "Forcing usage of wayland over xwayland"
date: 2023-03-27T09:53:00+01:00
description: Getting apps to use wayland rather than xwayland
draft: false
categories:
  - Linux
tags:
  - Wayland
  - Brave
  - Chrome
  - FireFox
---

## Firefox

Edit ``/etc/profiles.d/wayland.md``:

```bash
#! /bin/bash

export MOZ_ENABLE_WAYLAND=1
```

## Chrome/Brave

* Chrome: Go to ``chrome://flags#ozone-platform-hint``
* Brave: Go to ``brave://flags#ozone-platform-hint``

Switch "Preferred Ozone platform" to "Auto".

## Discord

The docs say to change the launch command to:

```bash
discord --enable-features=UseOzonePlatform --ozone-platform=wayland
```

However, this results in a core dump.

This currently works:

```bash
discord --disable-gpu-sandbox
```
