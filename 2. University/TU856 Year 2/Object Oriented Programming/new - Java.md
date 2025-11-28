---
tags:
  - Object-Oriented-Programming
  - Java
aliases:
---
## What is new?
`new` allows you to store an object inside of heap memory.

 When instantiating an object in java, you need to create the object inside of heap memory. If you don't, then that object disappears when the constructor that called it ends.
 In C, you would use malloc(). In java, you use the keyword `new`.

**Example**
This calls the Student constructor to create an object. However, because the `new` keyword isn't used, the object gets wiped upon the ending of the constructor.
```java showlinenumbers
Student s1 = new Student("ABC123","John Doe",23);
```

This also calls the Student constructor to instantiate an object, but also add it into heap memory, allowing it to remain after the constructor ends.
```java showlinenumbers
Student s1 = new Student("ABC123","John Doe",23);
```

# See Also
[[$ Object Oriented Programming]]
