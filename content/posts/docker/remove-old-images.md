---
title: "Docker remove images"
date: 2023-02-07T10:31:00+00:00
description: Removing old images
draft: false
categories:
  - Docker
tags:
  - Dokcer
---
# Docker 

## Remove unused images, containers and configuration

- all stopped containers
- all networks not used by at least one container
- all dangling images
- all dangling build cache

```bash
docker system prune
```

## Remove unused images

- all dangling images

```bash
docker image prune
```
