---
title: "GPG - managing keys"
date: 2022-01-12T08:47:11+01:00
description: GPG notes
draft: false
categories:
  - Security
tags:
  - GPG
  - Security
---

## List Keys

```bash
gpg --list-keys
```

## Export Key

However, you may not want to bring all that trust data and lots of keys with you. If you'd just like to copy your keys over, first export them (as usual, we assume gpg is in your path):

```bash
gpg --export-secret-keys -a keyid > my_private_key.asc
gpg --export -a keyid > my_public_key.asc
```

Where keyid is your PGP key ID, such as A1E732BB. Copy both files securely to the new machine — avoid FTP or other plain-text protocols, since even though the private key is encrypted with your passphrase, that passphrase is still the weakest link, and you want to minimise exposure of your private key wherever possible.

## Import Key

```bash
gpg --import my_private_key.asc
gpg --import my_public_key.asc
```
