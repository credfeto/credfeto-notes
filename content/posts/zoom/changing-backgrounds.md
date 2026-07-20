---
title: "Zoom: Changing virtual backgrounds"
date: 2024-10-25T14:15:01+00:00
description: Changing virtual backgrounds via script
draft: false
categories:
  - Linux
  - Zoom
tags:
  - Zoom
  - Background
---

## With flatpak Zoom

Select a custom background image in the Zoom UI.

In the folder:
`~/.var/app/us.zoom.Zoom/.zoom/data/VirtualBkgnd_Custom`

Find the file with the name `{guid}`.

Replace the file with a link:

```bash
ln -s -f ~/Pictures/Backgrounds/dt-link.jpg {guid}
```

Use the ``wallpaper`` script at login/logoff to change the image before Zoom runs.

See [this FreeCodeCamp article](https://www.freecodecamp.org/news/how-to-write-a-script-to-change-zoom-background/) for more detail.
