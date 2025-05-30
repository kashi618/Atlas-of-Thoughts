---
tags:
  - ComputerScience
---
In this game, you want to move all the disks to tower three
Here are the rules:
- Only one disk can be moved at a time
- A disk cannot be placed on a smaller disk

## Suitable for Recursion?
This is perfect for recursion, because of two things
- There is a base case
- The problem gets iteratively smaller

## Recursive Algorithm
```
moveTower(disks, source, dest, spare)

disks  = Which disk to move
source = From which tower to move from
dest   = From which tower to move to
spare  = Extra tower

disk0  = smallest disk
disk1  = middle   disk
disk2  = largest  disk
```

### Call Stack

| Movement                                       | Function Call            |
| ---------------------------------------------- | ------------------------ |
| Move **disk0** from **tower 1** to **tower 3** | moveTower(0 ,T1, T3, T2) |
| Move **disk1** from **tower 1** to **tower 2** | moveTower(1, T1, T2, )   |
| move **disk0** from **tower 3** to **tower 2** | moveTower(0, T3, T2)     |
| move **disk2** from **tower 1** to **tower 3** | moveTower(2, T1, T3)     |
| move **disk0** from **tower 2** to **tower 1** | moveTower(0, T2, T1)     |
| move **disk1** from **tower 2** to **tower 3** | moveTower(1, T2, T3)     |
| move **disk0** from **tower 1** to **tower 3** | moveTower(0, T1, T3)     |

# See Also