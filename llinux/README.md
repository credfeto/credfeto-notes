# Linux

## Package Management

### Debian based

#### Removing unused packages

``` bash
apt autoremove
```

### Arch based

#### Removing unused packages

List what is unused

```bash
pacman -Qdtq
```

Remove all unused

```bash
pacman -Qdtq | pacman -Rs -
```
