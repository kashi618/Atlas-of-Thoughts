---
tags:
  - Object-Oriented-Programming
  - Java
aliases:
---

"Encapsulation is a way to bundle coding pieces together,  
allowing for greater security and simplifying data hiding"

This can be applied to classes, methods, and attributes.

## Advantages
- Gives data protection
	- setters (for example, invalid age)
- Gives controlled access to certain methods
	- getters (for example, retrieve age)
- Hides complexity and implements details
	- Just call methods, no need to know the details
## Encapsulation on Attributes and Methods
### Visibility Levels

| Modifier  | Visibility                              |
| --------- | --------------------------------------- |
| public    | Can be accessed EVERYWHERE              |
| protected | Only in the same package and subclasses |
| default   | Only in the same package                |
| private   | Only in the class                       |

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


### Methods
Sometimes you want to encapsulate certain methods, to prevent missuse of them. 
For example, if we had a method to add funds to a bank account, we want to keep this private.

```java showlinenumbers
private addFunds(int amount);
```


# See Also
[[$ Object Oriented Programming]]
