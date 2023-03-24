---
title: "Spectacle wayland"
date: 2023-03-24T17:20:00+00:00
description: Fixing screenshot on wayland
draft: false
categories:
  - Linux
tags:
  - Wayland
  - Screenshot

# Fixing spectable  screenshot issue on Wayland

Can't take screenshot with Spectacle

```
Screenshot request failed: "The process is not authorized to take a screenshot"
qt.qpa.wayland: Wayland does not support QWindow::requestActivate()
```

fix: 
```bash
rm ~/.local/share/applications/org.kde.spectacle.desktop
```
then restart spectable
