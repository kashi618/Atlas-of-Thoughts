---
tags:
  - Mathematics-2
aliases:
---
Quick way to find powers of an integer

### Calculate 2⁶⁴⁴(mod645)
**Step 1**
Convert the power into binary
645 = 1010000100

**Step 2**
Use the binary to find the powers needed
```
1   0   1   0   0   0   0   1   0   0
2⁹      2⁷                  2²

```

$2^9*2^7*2^2=512*128*4$

Now we use these powers for 2
$2^{512}*2^{128}*2^4$

**Step 3**
Find out answers to the powers

First, lets start out with the smallest $2^4$
$2^4=16mod645$

Now, lets square it, and keep on doing it until we have answers to all our powers
$2^{8}=(16)^2≡256mod645$
$2^{16}=(256)^2=65536≡391mod645$
$2^{32}=(391)^2=152881≡16mod645$
$2^{64}=(16)^2≡256mod645$
$2^{128}=(256)^2≡391mod645$
$2^{256}=(391)^2=152881≡16mod645$
$2^{512}=(16)^2≡256mod(645)$

**Step 4**
Now lets put it all together

$2^{644}=2^{512}*2^{128}*2^4$
$2^{644}=256*391*16=1601536≡1mod645$

# See Also
[[$ Mathematics 2]]
