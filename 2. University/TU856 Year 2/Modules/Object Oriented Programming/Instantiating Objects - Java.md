---
tags:
  - Object-Oriented-Programming
  - Java
aliases:
---

## How to Instantiate an Object
**Example class Student**
```java showlinenumbers
public class Student {
	// ----- Attributes ----- //
	public String studentId;
	public String fullName;
	public int age;
	
	// ----- Constructors ----- //
	public Student() {
		// Default class, allows for empty Student objects
	}
	
	public Student(String studentId, String fullName, int age) {
		this.studentId = studentId;
		this.fullName = fullName;
		this.age = age;
	}
}
```

**Instantiating Student object**
```java showlinenumbers
public class Control {
	public static void(String[] args) {
		// Instantiating a new object of class Student called student1
		Student student1 = new Student();
		
		// Another Student object, but with parameters
		Student student2 = new Student(ABC123, "John Doe", 34);
	}
}
```
# See Also
[[$ Object Oriented Programming]]
