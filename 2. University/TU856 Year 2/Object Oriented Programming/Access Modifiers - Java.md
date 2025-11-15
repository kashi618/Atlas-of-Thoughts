---
tags:
  - Object-Oriented-Programming
  - Java
aliases:
---
### Visibility Levels

| Access Modifier | Visibility                                                   |
| --------------- | ------------------------------------------------------------ |
| public          | Can be accessed **EVERYWHERE**                               |
| protected       | Only in the same **package** and **subclasses** (in any pkg) |
| default         | Only in the same **package**                                 |
| private         | Only in the **class**                                        |

### Public Attributes
Public attributes can be accessed outside of its class. This means that any value can be set, **bad data**.
```java showlinenumbers
public int age;
```

### Private Attributes
Private attributes can only be accessed inside of its class.
To access them otherwise, you will need to create getters and setters
```java showlinenumbers
private int age;
```


# See Also
[[$ Java - Programming Language]]
