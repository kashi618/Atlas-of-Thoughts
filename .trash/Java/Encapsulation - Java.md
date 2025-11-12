---
tags:
  - Object-Oriented-Programming
  - Java
aliases:
---
## What is Encapsulation?
"Encapsulation is a way to bundle coding pieces together, allowing for greater security and simplifying data hiding"
This can be applied to the follow:
- Classes
- Methods
- Attributes (Most common usage)

## Why Is It Important?
### Data Protection
Allows you to restrict access to attributes

1. **Data hiding**. It allows you to hide certain pieces of data, restricting control and access to them.
2. **Gatekeeping**. Due to data hiding, you can create public interfaces to allow only specific values for attributes.


- Gives data protection
	- setters (for example, invalid age)
- Gives controlled access to certain methods
	- getters (for example, retrieve age)
- Hides complexity and implements details
	- Just call methods, no need to know the details

## Encapsulation Uses
**Methods**
Sometimes you want to encapsulate certain methods, to prevent missuse of them. 
For example, if we had a method to add funds to a bank account, we want to keep this private.

```java showlinenumbers
private addFunds(int amount);
```

**Access Modifiers**
[[Access Modifiers - Java]]
Allows you to create public, private, and protected modifiers

[[Getters and Setters - Java]]
Main component of gatekeeping


# See Also
[[$ Java - Programming Language]]
