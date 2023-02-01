---
title: "Dynamic DNS with DDClient"
date: 2022-05-11T08:47:11+01:00
description: DDClient
draft: false
categories:
  - Linux
tags:
  - Dynamic DNS
---
# Dynamic DNS with ddclient

```bash
sudo apt-get install ddclient libdata-validate-ip-perl libjson-any-perl net-tools
```

Edit  /etc/ddclient.conf as:

```
daemon=1800
syslog=yes
protocol=cloudflare
use=web
web=checkip.dyndns.org/ 6
web-skip=‘IP Address’
ssl=yes
login=<Cloudflare Login>
password=<APIKEY>
zone=example.com
host.example.com
```

Verify config

```bash
sudo service ddclient status
sudo ddclient -query
sudo ddclient -daemon=0 -verbose -noquiet
```

Enable Service

```bash
sudo service ddclient status
```

## Set Hostname

```bash
sudo hostnamectl set-hostname whatever.example.com
```


