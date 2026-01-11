---
tags:
  - Object-Oriented-Programming
  - Java
aliases:
---

Special keyword that refers to the attributes of the object of a class.

## Example
We have these attributes in a class Student
```java showlinenumbers
public class Person {
	public String name;
	public int age;
}
```

With a constructor giving values to all attributes.
```java showlinenumbers
public class Person {
	public String name;
	public int age;
	
	public Student(String name, int age) {
		name = name;
		age = age;
	}
}
```

We can see that `name = name` doesn't make sense. Therefore, we use `this`, to differentiate the variable name of the attribute, to the variable name of the parameter of an object.
```java showlinenumbers
public class Person {
	public String name;
	public int age;
	
	public Student(String name, int age) {
		this.name = name;
		this.age = age;
	}
}
```

# See Also
[[$ Object Oriented Programming]]
