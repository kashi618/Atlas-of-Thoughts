---
tags:
  - Object-Oriented-Programming
  - Java
aliases:
---
In java, methods in the same class can have the same name, provided that their [[Method Signature - Java|method signature]] is different.

## Valid Method Overloading
All of these methods can exist and work in the same class
This is because their method signatures are different
```java showlinenumbers
public class maths {
	
	public int addNumbers(int a, int b) {
		return a + b;
	}
	
	public int addNumbers(int a, int b, int c) {
		return a + b + c;
	}
	
	public int addNumbers(int a, intb, int c, int x, int y, int z) {
		return a + b + c + x + y + z;
	}

}
```
- It is used to create objects, without specifying all its attributes.
## Invalid Method Overloading
These two methods would not work, because their function signature is the same.
**Note:** remember that the method signature only consists of the method name and its parameters. Return type is NOT included
```java showlinenumbers
public class maths {

	public int addNumbers(int a, int b) {
		return a + b;
	}
	
	public float addNumbers(int a, int b) {
		return a + b ;
	}

}
```

# See Also
[[$ Object Oriented Programming]]
