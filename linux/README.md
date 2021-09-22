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
