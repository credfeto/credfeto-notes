---
title: "Hardening linux"
date: 2024-03-11T14:06:11+00:00
description: Hardening linux
draft: false
categories:
  - Linux
tags:
  - Lsblk
---

## Kernel Command line options

```text
slab_nomerge
slub_debug=FZ
init_on_alloc=1
init_on_free=1
pti=on
lsm=landlock,lockdown,yama,apparmor,bpf
apparmor=1
security=apparmor
lockdown=confidentiality
hardened_usercopy=on
ia32_emulation=0
```

## /etc/sysctl.d/*

### Restrict access to dmesg

Contents of `dmesg_restrict.conf`:

```conf
kernel.dmesg_restrict=1
```

### Harden bpf

Contents of `harden_bpf.conf`:

```conf
kernel.unprivileged_bpf_disabled=1
net.core.bpf_jit_harden=2
```

### Restrict Kexec

Notes:

* causes Zoom to crash on start if enabled

Contents of `kexec.conf`:

```conf
kernel.kexec_load_disabled=1
```

### Restrict Kptr

Contents of `kptr_restrict.conf`:

```conf
kernel.kptr_restrict=2
```

### PTrace scope

Contents of `ptrace_scope.conf`:

```conf
kernel.yama.ptrace_scope=2
```

### TCP

Contents of `tcp_hardening.conf`:

```conf
net.ipv4.tcp_syncookies=1

net.ipv4.tcp_rfc1337=1

net.ipv4.conf.default.rp_filter=1
net.ipv4.conf.all.rp_filter=1

net.ipv4.conf.all.accept_redirects=0
net.ipv4.conf.default.accept_redirects=0
net.ipv4.conf.all.secure_redirects=0
net.ipv4.conf.default.secure_redirects=0
net.ipv6.conf.all.accept_redirects=0
net.ipv6.conf.default.accept_redirects=0

net.ipv4.conf.all.send_redirects=0
net.ipv4.conf.default.send_redirects=0

net.ipv4.icmp_echo_ignore_all=1
```

### Unprivileged users namespace clone

Notes:

* does not work with Zoom
* does not work with Docker

Contents of `unprivileged_users_clone.conf`:

```conf
kernel.unprivileged_userns_clone=1
```
