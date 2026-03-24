---
tags:
  - DataCommunications
aliases:
---

```
A 00xxxxxx (192.168.1.0   -> 192.168.1.63)
B 01xxxxxx (192.168.1.64  -> 192.168.1.127)
C 10xxxxxx (192.168.1.128 -> 192..168.191)
D 11xxxxxx (192.168.1.191 -> 192.168.1.255)

First host address is +1
Last host address is -1
A 192.168.1.1   -> 192.168.1.62
B 192.168.1.65  -> 192.168.1.126
C 192.168.1.129 -> 192.168.1.190
D 192.168.1.192 -> 192.168.1.254
```

# See Also
[[$ Data Communications]]