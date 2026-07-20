---
title: "Scripting"
date: 2023-05-11T22:06:11+01:00
description: Using dash for performance
draft: false
categories:
  - Linux
tags:
  - Dash
  - Bash
---

Install the dash shell as the default shell over bash on Arch:

```bash
yay -Sy dash dashbinsh
```

Install a script to check for bash-isms in scripts that claim to be POSIX shell compatible:

```bash
yay -Sy checkbashisms
```
