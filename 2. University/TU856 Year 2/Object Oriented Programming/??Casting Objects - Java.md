---
tags:
  - Object-Oriented-Programming
  - Java
aliases:
---
Casting objects is when you take an object of one type, and convert it into another type.

**Upcasting**
```java showlinenumbers
//Create a new Student Object
Student s1 = new Student();

// (Explicit Casting) Upcast into a Person object`
Person p1 = (person) s1;

// (Implicit Casting) This also works
Person p1 = s1;
```

**Downcasting**
Downcasting 
```java showlinenumbers
// Creates a new Person object
Person p1 = new Student();
// Downcasts the object into a Student object
Student s1 = (student) p1;
```

# See Also
[[$ Java - Programming Language]]
