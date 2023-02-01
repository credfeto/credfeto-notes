---
title: "Correcting keyboard layout"
date: 2019-03-26T08:47:11+01:00
description: Correcting keyboard layouts
draft: false
categories:
  - Linux
tags:
  - Keyboard
---
#  Correct Keyboard layout

[See](https://gist.github.com/keckelt/0ba90f8840e2903bfdc54c7e19ad4613)

```bash
xmodmap -e 'keycode 49 = grave'
```
