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
```java showlinenumbers
class Math {
	int number;
		
		
	// Return 0 if even, 1 if odds
	public static int oddEven(int num) {
		if (num%2 == 0 ) {
			return 0;
		}
		else {
			return 1;
		}
	}

}
```
This method tells the user if an inputted digit is odd or even.
The method is static, which allows non class members of class Math to use this aswell.
i.e. you don't need to do `Math num = new Math(i); math.oddEven(num);`


# See Also
[[$ Java - Programming Language]]
