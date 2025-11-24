---
tags:
  - Object-Oriented-Programming
  - Java
aliases:
---
## What is Inheritance?
It is a core concept in OOP and Java that allows for code reuse. It allow allows for polymorphism, when a new class inherits the attributes and methods of another class.

## Key Terms
### Parent Class
Also known as the **superclass** or **base class**. It is a class the provides general attributes and methods for other classes to reuse/inherit from.

### Child Class
Also known as the **subclass** or **derived class**. It is a class that inherits properties from a parent/superclass.
*"It is like a parent class, but with a little bit more" - Colette*

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

## Notes
- Any attributes created in the child class, can only be used in the child class. It will not be present in the parent.

- Every user made class in Java, has a "**secret**" parent class that it takes methods and attributes from. For example, the `toString()` method. 
  It is called the object class or *"the Adam and Eve class" - Colette*

# See Also
[[$ Java - Programming Language]]
[[??Polymorphism - Java]]