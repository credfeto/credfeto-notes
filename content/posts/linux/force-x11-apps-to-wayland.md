---
title: "Forcing usage of wayland over xwayland"
date: 2023-03-24T17:20:00+00:00
description: Getting apps to use wayland rather than xwayland
draft: false
categories:
  - Linux
tags:
  - Wayland
  - FireFox
---
# Fixing spectable screenshot issues on Wayland

## Firefox

edit /etc/profiles.d/wayland.md
```bash
#! /bin/bash

export MOZ_ENABLE_WAYLAND=1
```
