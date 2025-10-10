---
tags:
  - Object-Oriented-Programming
  - Java
aliases:
---
Allows parent-child classes.
- You create a parent class with some attributes
- Now, you can create a child class that contains the same attributes, but "with a little bit more". - Colette

Parent class Person
- Contains attributes such as name, age, gender
Child class Student
- Inherits all attributes from Person, but also contains student number and role number.

**Note:** any attributes created in the child class, will only be used in the child class. It will not be present in the parent.

**Note2:** every class you make in java, has a "secret" parent class that it takes methods and attributes from. For example, the `toString()` method. It is called the `object` class. The "adam and eve" class. - Colette

## Parent Class
```java showlinenumbers
public class person {
	int age;
	String name;
	String gender;

}
```
## Child Class
```java showlinenumbers
public class student extends person {
	int roleNumer;
	String studentId;

}
```

# See Also
[[$ Object Oriented Programming]]
