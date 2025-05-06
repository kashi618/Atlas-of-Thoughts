## Inspiration
- https://codeberg.org/LainOS/LainOS-ricer-arch
- https://github.com/FlexUnder/Lain-linux-rice/tree/master

## Packages
- Hyprland - Window Manager


## Installing Hyprland
```bash
sudo pacman -S hyprland kitty
```

### Hyprland Dependencies
```bash
yay -S ninja gcc cmake meson libxcb xcb-proto xcb-util xcb-util-keysyms libxfixes libx11 libxcomposite libxrender libxcursor pixman wayland-protocols cairo pango libxkbcommon xcb-util-wm xorg-xwayland libinput libliftoff libdisplay-info cpio tomlplusplus hyprlang-git hyprcursor-git hyprwayland-scanner-git xcb-util-errors hyprutils-git glaze hyprgraphics-git
```

### Other Dependencies
- aquamarine
- hyprlang
- hyprcursor
- hyprutils
- hyprgraphics
- hyprwayland-scanner (build-only)

## Fonts
```
sudo pacman -S noto-fonts noto-fonts-cjk noto-fonts-emoji noto-fonts-extra
```
## Cool Finds
procmon
