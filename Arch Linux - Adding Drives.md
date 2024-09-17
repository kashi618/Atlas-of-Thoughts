---
tags:
  - Linux
  - other
---
## Instructions

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
mount /dev/{DISKNAME} /{PathToMount}
```

### Add to Fstab
