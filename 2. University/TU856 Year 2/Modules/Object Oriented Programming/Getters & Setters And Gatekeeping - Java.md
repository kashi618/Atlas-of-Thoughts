---
tags:
  - Object-Oriented-Programming
  - Java
aliases:
---
Due to variables being set as private [[Access Modifiers - Java|private]], we still need a way to access them.
To do this, we use methods called the `setter` and the `getter`

## Overview
Lets say we have a class Student such as this:
```java showlinenumbers
public class Student() {
	// Student Attributes (all private)
	private int age;
	private int roleNumber;
	
	// Student Constructor
	public Student(int age, int roleNumber) {
		this.age = age;
		this.roleNumber = roleNumber;
	}
}
```
- Contains two private attributes, their age and role number.


### Creating Setter
A setter is used to set the value of a private attribute. In this case, we need to create a public method (setter) to access and set these private attributes.

```java showlinenumbers
// ----- This is inside the Student class ----- //
public void setAge(int age) {
	this.age = age;
}
```

#### Setter Gatekeeping
Due to using a method for setting the attribute, we can gatekeep/filter the value being inputted.


In this case, we make sure the student's age is between 0-99
```java showlinenumbers
public void setAge(int age) {
	if (age < 0 || age > 99) {
		System.out.println("Invalid age. Defaulting to 0");
	}
	else {
		this.age = age;	
	}
}
```
**Note:** We can do a variety of other things aswell, especially regarding string. (trimming white spaces, removing spaces, same case, etc)

### Creating Getter
A getter is used to get the value of a private attribute. In this case, we need to create a public method (getter) to access and return the value of the attribute.


# See Also
[[$ Java - Programming Language]]
