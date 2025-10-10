**BEQ**
- (Branch if equal)
- Takes the last flags, and 
```arm
MOVS R0, #1
CMP  R0, #1
BEQ  coolLabel

coolLabel:
```
