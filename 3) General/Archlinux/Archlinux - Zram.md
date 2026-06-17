## What is it?
A way for linux to create a compressed block inside of ram, which is then used as swap space. It is often faster than writing directly to HDD or SSD.

**HOWEVER**, this would only be benificial for systems with abundant ram, (16gb+) or more. Do **NOT** use for systems lacking in ram, as this will mean your "total" amount of ram would be less, requiring CPU cycles to compress and decompress.

## Setting up
Please check archlinux wiki for up to date steps


**Checking current swaps**
```
swapon --show
```

**Installing zram package**
```
pacman -S zram-generator
```

**Writing zram config**
```
[zram0]
zram-size = 9999
compression-algorithm = zstd
swap-priority = 100
```

**Changing swap priority** (Technically not needed)
```
# Add "pri=5" after "defaults"
UUID=xxxx    none    swap    defaults,pri=5     0 0
```

**Toggle swap on and off**
```
swapoff -a
swapon -a
```

**Restart zram**
```
systemctl restart systemd-zram-setup@zram0.service
```

**Verify zram is working**
```
swapon --show
```

