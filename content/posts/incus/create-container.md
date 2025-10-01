---
title: "incus - docker container"
date: 2025-08-05T07:56:01+00:00
description: Docker container on incus
draft: false
categories:
  - Linux
  - incus
  - docker
  - container
tags:
  - incus
  - docker
  - container
---
# Setting up a container


## Create a container

Create a container with the following command:

```bash
sudo incus launch images:archlinux <name> \
   -c security.nesting=true    \
   -c security.syscalls.intercept.mknod=true   \
   -c security.syscalls.intercept.setxattr=true \
   -c security.privileged: 'true' \
   -c security.idmap.isolated: 'true' \
   -c snapshots.schedule.stopped: 'true'\
   -c snapshots.schedule: '@daily' \
   -c snapshots.expiry: 2w \
   -c migration.stateful: 'true' \
   -c cluster.evacuate: live-migrate \
  -c boot.autostart: 'true'
```

install docker

```bash
pacman -Syu
pacman -S docker docker-compose docker-buildx
```