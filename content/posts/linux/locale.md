---
title: "Configuring locale"
date: 2023-04-24T21:34:11+01:00
description: Locale
draft: false
categories:
  - Linux
tags:
  - Locale
---
#  Configuring locale

Based on [Chris Titus Gist](https://gist.github.com/ChrisTitusTech/f55e2fd0b39b268fed251d12bd91b5e8) but changed for GB

```bash
echo "LC_ALL=en_GB.UTF-8" | sudo tee -a /etc/environment
echo "en_GB.UTF-8 UTF-8" | sudo tee -a /etc/locale.gen
echo "LANG=en_GB.UTF-8" | sudo tee -a /etc/locale.conf
sudo locale-gen en_GB.UTF-8
```

