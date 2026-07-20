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
---

## Can't take screenshot with Spectacle

```text
Screenshot request failed: "The process is not authorized to take a screenshot"
qt.qpa.wayland: Wayland does not support QWindow::requestActivate()
```

The fix:

```bash
rm ~/.local/share/applications/org.kde.spectacle.desktop
```

Then restart Spectacle.
