---
tags:
  - Object-Oriented-Programming
  - Java
aliases:
---
Encapsulation is a core concept in Java and OOP. It essentially allows you to bundle variables and methods inside of one single unit, called a class. 
What does this do?
- Data hiding. Disables outside access to attributes in a class
- Gatekeeping. Allows you to 


"Encapsulation is a way to bundle coding pieces together, allowing for greater security and simplifying data hiding"

This can be applied to classes, methods, and attributes.

They are called access modifiers.

## Advantages
- Gives data protection
	- setters (for example, invalid age)
- Gives controlled access to certain methods
	- getters (for example, retrieve age)
- Hides complexity and implements details
	- Just call methods, no need to know the details
## Encapsulation on Attributes and Methods


### Methods
Sometimes you want to encapsulate certain methods, to prevent missuse of them. 
For example, if we had a method to add funds to a bank account, we want to keep this private.

```java showlinenumbers
private addFunds(int amount);
```


# See Also
[[$ Java - Programming Language]]
