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

Remove Multilib packages:

```bash
pacman -R `LANG=C pacman -Sl multilib | grep installed | cut -d ' ' -f 2`
```

Once done edit ``/etc/pacman.conf`` and comment out the ``[multilib]` section

## Dynamic DNS with ddclient

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


## Correct Keyboard layout

[See](https://gist.github.com/keckelt/0ba90f8840e2903bfdc54c7e19ad4613)

```bash
xmodmap -e 'keycode 49 = grave'
```
