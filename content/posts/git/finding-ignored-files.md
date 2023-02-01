---
title: "Check for ignored files that are committed to git"
date: 2022-03-21T08:47:11+01:00
description: Git ignored files
draft: false
categories:
  - Git
tags:
  - Development
---
# Check for ignored files that are checked into git


```bash
git ls-files | grep -v server\.pfx | grep -v \.gitignore | git check-ignore --stdin -v --no-index
```
