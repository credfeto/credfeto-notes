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
# Fixing spectable screenshot issues on Wayland

## Firefox

edit ``/etc/profiles.d/wayland.md``
```bash
#! /bin/bash

export MOZ_ENABLE_WAYLAND=1
```

## Chrome/Brave

Go to chrome://flags#ozone-platform-hint
Go to brave://flags#ozone-platform-hint

Switch "Preferred Ozone platform" to "Auto"
