---
tags:
  - Unfinished
  - Linux
  - other
---
## set console layout and font
```
loadkeys uk
setfont ter-132b
```

- To see available layouts:
  ```
  localectl list-keymaps
    ```

## connect wifi
```
iwctl

device list
station {WifiAdapter} scan
station {WifiAdapter} get-networks
station {WifiAdapter} connect {ssid}
```

## update system clock
```
timedatectl
```

## wipe disk
```
gdisk /dev/{DiskName}

x

z
```


## partition disk
```
cgdisk /dev/{DiskName}
```

- Set Accordingly

```
{EnterKey},  1GiB,        ef00,  boot
{EnterKey},  8GiB,        8200,  swap
{EnterKey},  30GiB,       8300,  root
{EnterKey},  {EnterKey},  8300,  home
```
- Boot = Partition 1
- Swap = Partition 2
- Root = Partition 3
- Home = Partition 4

## format disk
```
mkfs.fat -F32 /dev/{Part.1}

mkfs.ext4 /dev/{Part.3}

mkfs.ext4 /dev/{Part.4}

mkswap /dev/{Part.2}

swapon /dev/{Part.2}
```

## mount disk
```
mount /dev/{Part.3} /mnt

mount --mkdir /dev/{Part.1} /mnt/boot

mount --mkdir /dev/{Part.4} /mnt/home
```
- Use lsblk to check paths

## update pacman mirrorlist
```
cp /etc/pacman.d/mirrorlist /etc/pacman.d/mirrorlist.backup

sudo pacman -Sy pacman-contrib

rankmirrors -n 6 /etc/pacman.d/mirrorlist.backup > /etc/pacman.d/mirrorlist
```


## install linux
```
pacstrap -K /mnt base linux linux-firmware base-devel networkmanager nano intel-ucode
```

## generating fstab
genfstab -U /mnt >> /mnt/etc/fstab

## chrooting into system
arch-chroot /mnt

## setting timezone
ln -sf /usr/share/zoneinfo/Europe/Dublin /etc/localtime
hwclock --systohc

## setting locale and keymap
nano /etc/locale.gen (uncomment en_US and personal one)
locale-gen

nano /etc/locale.conf
	LANG=en_IE.UTF-8
nano /etc/vconsole.conf
	KEYMAP=uk

## create hostname and password
nano /etc/hostname (add ur hostname)
passwd

## create user with sudo privileges
pacman -S sudo
useradd -m -G wheel kashi
passwd kashi
EDITOR=nano visudo (uncomment %wheel)

## pacman with 32bit support
nano /etc/pacman.conf
	[multilib]
	Include = /etc/pacman.d/mirrorlist


## creating bootloader (systemd-boot)
ls /sys/firmware/efi/efivars (check if uefi)
bootctl install
nano /boot/loader/loader.conf
	timeout0
	default arch-*
nano /boot/loader/entries/arch.conf
	title Arch
	linux /vmlinuz-linux
	initrd /initramfs-linux.img
	options root=/dev/DEVICE3 rw

## exiting chroot, rebooting
exit
reboot

## don't forget to enable network manager
systemctl enable NetworkManager.service

