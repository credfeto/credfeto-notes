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
# GPG

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

Where keyid is your PGP Key ID, such as A1E732BB. Take the the two files, securely copy them to the new machine (it is unadvisable to ftp them or use plain-text protocols because even thought your private key there is encrypted with your passphrase, your passphrase is still the weakest link, and you want to avoid exposure to your private key wherever possible). 

## Import Key
```bash
gpg --import my_private_key.asc
gpg --import my_public_key.asc
```
