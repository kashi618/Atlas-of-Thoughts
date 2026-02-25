---
tags:
  - Object-Oriented-Programming
  - Java
aliases:
---
## How do I Use Inheritance?
The keyword for inheritance is **extends**

Lets say we have a `Person` class, that contains attributes such as name and age.
```java showlinenumbers
public class Person{
	int age;
	String name;
}
```

Using this class, we can `inherit` its properties, to create a new class called `Student`.
```java showlinenumbers
public class Student extends Person {
	String studentID;
	String studentEmail;
}
```
This class inherits the attributes `age` and `name` from the `Person` class, meaning we do not need to rewrite code.
You can also inherit methods!


# See Also
[[$ Java - Programming Language]]
