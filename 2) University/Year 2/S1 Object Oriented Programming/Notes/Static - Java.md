---
tags:
  - Object-Oriented-Programming
  - Java
aliases:
---
## What is it?
Used in Java to define class level members, that belong to the class itself rather than to a specific instance of a class.

When a variable is made static, it will belong to the class itself. That means, if you have 10 objects of the same class, then they all share the same static variable. They all access the same static variable.

### Static Attributes
```java showlinenumbers
class Student {
	int studentNumber;
	static int studentCount = 0;
	
	public Student(int studentNumber) {
		this.studentNumber = studentNumber;
		studentCount++;
	}	
}
```
This is a class that instantiates a student object, that keeps track of a student's student number.
However, it also keeps track of how many students we have in total, by using the **static** keyword on the student count variable.
- Remember that `static`  is shared between each student object.

### Static Methods
A static method allow you to use that method, on variables/objects from different classes.
For example, the method `sumNums` can be used by objects of class Math. **BUT ALSO** on non related classes

**Example**
```java showlinenumbers
public class Math {
	public static int  sumNums(int a,int b) {
		return a+b;
	}
}
```
```java showlinenumbers
int x = Math.sumNums(5, 10);
int y = Math.sumNums(123, 321);
```
- Int `x` and `y` are NOT part of the `Math` class, but can still use the method `sumNums`

# See Also
[[$ Java - Programming Language]]
