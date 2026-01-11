---
tags:
  - Object-Oriented-Programming
  - Java
aliases:
---
## What is it?
It is used to define methods that other classes MUST implement. It does not contain the actual code for these methods however.
- Useful for security purposes, such as forcing the user to close a file when they are finished with it.

### Rules
- Cannot be instantiated
- All methods are implicitly public
- Different classes that use the same interface, can implement the interface methods however they want. (each class can have unique ways to implement them)


## Using and Implementing Interfaces
### Creating an Interface
```java showlinenumbers
Interface MammalBehavious {
	// Methods that MUST be used with this interface
	void breathe();
	void eat();
	void drink();
}
```

In Java:
- All methods declared within an interface are **implicitly public and abstract** (default is public and abstract)
- Therefore, each implementing class must **make these methods public**, allowing it to be **accessed and overridden**

### Implementing an Interface
```java showlinenumbers {3-5} {7-9} {11-13}
public class Cat implements MammalBehaviours{	
// Methods to implement
	public void breath() {
		// code...
	}
	
	public void eat() {
		// code...
	}
	
	public void drink() {
		// code...
	}	
}
```
#### Implementing Multiple Interfaces
```java showlinenumbers
public class CoolClass implements Interface1, Interface2, Interface3 {
	// code...
}
```

### Interface Attributes
In Java, interfaces **cannot** have instance attributes. However, they can define constants. (public final variables)

**Example**
```java showLineNumbers {2-4} {6-8}
public interface Shapes{
	// Examble attributes
	double PI = 3.141592;
	String COLOUR = "red";
	
	// HOWEVER, compiler sees it as
	public static final double PI = 3.141592:
	public static final String COLOUR = "red";
}
```

# See Also
[[$ Java - Programming Language]]
