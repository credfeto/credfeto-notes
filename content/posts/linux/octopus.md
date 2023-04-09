---
title: "Octopus tentacle install arch"
date: 2023-04-09T17:20:00+00:00
description: Installing octopus tentacle on arch
draft: false
categories:
  - Linux
tags:
  - Octopus
  - Tendtacle
---
# Installing polling octopus tentacle on arch

[See](https://octopus.com/docs/infrastructure/deployment-targets/tentacle/linux)


## Required packages

* inetutils - for hostname 
* 
```bash
pacman -Sy inetutils
```


## Linux X64
As root
```bash
wget https://octopus.com/downloads/latest/Linux_x64TarGz/OctopusTentacle -O tentacle-linux_x64.tar.gz
mkdir /opt/octopus
tar xvzf tentacle-linux_x65.tar.gz -C /opt/octopus

# Follow the prompts in
/opt/octopus/tentacle/configure-tentacle.sh

/opt/octopus/tentacle/Tentacle service --install --start
```

## Linux ARM64
As root
```bash
wget https://octopus.com/downloads/latest/Linux_arm64TarGz/OctopusTentacle -O tentacle-linux_arm64.tar.gz
mkdir /opt/octopus
tar xvzf tentacle-linux_arm64.tar.gz -C /opt/octopus

# Follow the prompts in
/opt/octopus/tentacle/configure-tentacle.sh

/opt/octopus/tentacle/Tentacle service --install --start
```

## For each service 

```bash
useradd <serviceuser>
``
