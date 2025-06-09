### pacman
**List packages not needed by others**
```
pacman -Qdtq
```

**Remove package, its dependencies, and config file backups**
```
pacman -Rnsc
```

**Top two merged**
```
pacman -Rnsc $(pacman -Qdtq)
```

**Clear old packages in cache**
```
pacman -Sc
pacman -Scc
```

**Update all packages**
```
pacman -Syu
```

### makepkg
**build and install package, removing unneeded dependencies and packages after**
```
makepkg -sir
```

