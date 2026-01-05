## Prerequisites
### Installing Required Packages
```
sudo pacman -S mariadb dbeaver
```
- Might need to install jdk-openjdk, then set it as default java runtime


## MariaDB
### Initialize MariaDB directory
```
sudo mariadb-install-db --user=mysql --basedir=/usr --datadir=/var/lib/mysql
```

### Start MariaDB service
```
systemctl start mariadb
systemctl enable mariadb
```

### Create Database