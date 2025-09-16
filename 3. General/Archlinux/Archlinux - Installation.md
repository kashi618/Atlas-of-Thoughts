---
tags:
  - Linux
  - other
---

## set console layout and font
``` bash
loadkeys us

setfont ter-132b
```

- To see available layouts:
  ``` bash
  localectl list-keymaps
    ```

## connect wifi
``` bash
iwctl

device list

station {WifiAdapter} scan

station {WifiAdapter} get-networks

station {WifiAdapter} connect {ssid}
```

## update system clock
``` bash
timedatectl
```
- If `System clock synchronized: no`, then  use `timedatectl set-ntp true`
## wipe disk partition
``` bash
gdisk /dev/{DiskName}

x

z
```

## partition disk
``` bash
cgdisk /dev/{DiskName}
```

- Set Accordingly

``` bash
{EnterKey},  1GiB,        ef00,  boot
{EnterKey},  8GiB,        8200,  swap
{EnterKey},  40GiB,       8300,  root
{EnterKey},  {EnterKey},  8300,  home
```
- Boot = Partition 1
- Swap = Partition 2
- Root = Partition 3
- Home = Partition 4

## format disk
``` bash
mkfs.fat -F32 /dev/{Part.1}

mkfs.ext4 /dev/{Part.3}

mkfs.ext4 /dev/{Part.4}

mkswap /dev/{Part.2}

swapon /dev/{Part.2}
```

## mount disk
``` bash
mount /dev/{Part.3} /mnt

mount --mkdir /dev/{Part.1} /mnt/boot

mount --mkdir /dev/{Part.4} /mnt/home
```
- Use lsblk to check paths
```
Partition 1 = /mnt/boot
Partition 2 = [SWAP]
Partition 3 = /mnt
Partition 4 = /mnt/home
```

## update pacman mirrorlist
``` bash
cp /etc/pacman.d/mirrorlist /etc/pacman.d/mirrorlist.backup

sudo pacman -Sy pacman-contrib

rankmirrors -n 10 /etc/pacman.d/mirrorlist
```


## install linux
``` bash
pacstrap -K /mnt base linux linux-firmware base-devel networkmanager
```
```
// Extras
vim nano intel-ucode timeshift sudo
```
- **NOTE**: Remove "intel-ucode" if not using intel cpu

## generating fstab
``` bash
genfstab -U /mnt >> /mnt/etc/fstab
```
genfstab -U /mnt >> /mnt/etc/fstab

## chrooting into system
``` bash
arch-chroot /mnt
```

## setting timezone
``` bash
ln -sf /usr/share/zoneinfo/Europe/Dublin /etc/localtime

hwclock --systohc
```
- If not un Europe/Dublin, change by looking through "zoneinfo" folder

## setting locale and keymap
``` bash
nano /etc/locale.gen
```
- Uncomment en_US, and then the one for your locale

``` bash
locale-gen
```

``` bash
nano /etc/locale.conf
```
- Append "LANG=en_IE.UTF-8"
- Append "LANG=en_US.UTF-8"

``` bash
nano /etc/vconsole.conf
```
- Append "KEYMAP=uk"

## create hostname and password
``` bash
nano /etc/hostname
```
- Write your hostname inside of this file
```bash
passwd
```

## create user with sudo privileges
``` bash
pacman -S sudo

useradd -m -G wheel {Username}

passwd {Username}

EDITOR=nano visudo
```
- Uncomment the %wheel

## pacman with 32bit support
``` bash
nano /etc/pacman.conf
pacman -Syuu
```
- Uncomment "Include = /etc/pacman.d/mirrorlist" under the heading "multilib"

## creating bootloader (systemd-boot)
``` bash
bootctl install
```

``` bash
nano /boot/loader/loader.conf
	timeout 9999
	default arch-*
```

``` bash
nano /boot/loader/entries/arch.conf
	title Arch
	linux /vmlinuz-linux
	initrd /initramfs-linux.img
	options root=UUID={uuid of root drive} rw
```
- You can find the uuid of the root drive using
  `lsblk -f`

## for nvidia cards
```bash
sudo pacman -S nvidia-dkms libglvnd nvidia-utils opencl-nvidia lib32-libglvnd lib32-nvidia-utils lib32-opencl-nvidia nvidia-settings linux-headers
```

- Also install `linux-headers` if getting error message with headers

### add vital modules
```bash
sudo nano /etc/mkinitcpio.conf
```
- Inside "MODULES=()" add 
  `MODULES=(nvidia nvidia_modeset nvidia_uvm nvidia_drm)`

### make modules load at bootloader
```bash
nano /boot/loader/entries/arch.conf
```
- Add this after the rw (on the same line)
```
nvidia-drm/modeset=1
```

### add hooks for updating drivers
```bash
sudo mkdir /etc/pacman.d/hooks
sudo nano /etc/pacman.d/hooks/nvidia.hook
```
- Add this in the `nvidia.hook` file
```txt
[Trigger]
Operation=Install
Operation=Upgrade
Operation=Remove
Type=Package
Target=nvidia

[Action]
Depends=mkinitcpio
When=PostTransaction
Exec=/usr/bin/mkinitcpio -P
```

## exiting chroot, rebooting
``` bash
exit
umount -R /mnt
reboot
```


## don't forget to enable network manager
```bash
systemctl enable NetworkManager.service
systemctl start NetworkManager.service
nmtui
```

