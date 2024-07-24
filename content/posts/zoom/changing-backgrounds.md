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
# Zoom Changing backgrounds

## with flatpak zoom

Select a custom background image in zoom UI

in folder:
`~/.var/app/us.zoom.Zoom/.zoom/data/VirtualBkgnd_Custom`

find the file with the name `{guid}`

replace the file with a link
```bash
ln -s -f ~/Pictures/Backgrounds/dt-link.jpg {guid}
```

use ``wallpaper`` script at login/logoff to change the image before zoom runs
