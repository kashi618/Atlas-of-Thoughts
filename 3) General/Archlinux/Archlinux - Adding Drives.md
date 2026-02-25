---
tags:
  - other
  - ArchLinux
---
## Instructions
- **{DISKNAME}**
  Name of parition, can be found by running lsbk
- **{PATH}**
  Path you want to mount the drive to

### Wipe
``` bash
fdisk /dev/{DISKNAME}
```

### Partition
``` bash
cgdisk /dev/{DISKNAME}
```

### Format
``` bash
mkfs.ext4 /dev/{DISKNAME}
```

### Mount
``` bash
mount /dev/{DISKNAME} /{PATH}
```

### Add to Fstab
``` bash
blkid
sudo nano /etc/fstab
```
- Use blkid to find UUID of partition
- Use nano to edit fstab file

| UUID           | dir      | type | options     | dump | pass |
| -------------- | -------- | ---- | ----------- | ---- | ---- |
| UUID=xxxx-xxxx | /{PATH}} | ext4 | rw,relatime | 0    | 1    |
