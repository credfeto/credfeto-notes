---
title: "{{ replace .Name "-" " " | title }}"

<!-- #date: {{ now.Format "2006-01-02" }} -->
url: /{{ .Name }}/
image: images/thumbs/{{ .Name }}.jpg
categories:
  - AWS
  - Linux
  - SQL
  - SSH
  - Security
tags:
  - Ubuntu
draft: false
---
<!--more-->
