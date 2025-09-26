---
tags:
  - Object-Oriented-Programming
  - Java
aliases:
---

## How to Create a Class
- Class name (capital letters)
- Access modifiers
- Data types (due to static typing)
- Methods (if any)
- Constructor
- Comments

## Attributes
An attribute is a type of variable

**Access modifier**
Controls the accessibility/scope of the attribute
- `private`, `public`, `protected`

**Data type**
The data type of the attribute
- `String`, `int`, `float`, `double`

**Attribute name**
The name of the attribute

### Example

```java showlinenumbers
// Class named Car
public class Car {

	// Access modifier  private
	// Data type        String 
	// Name             model
	private String model;
	
	// Access modifier  private
	// Data type        int 
	// Name             year
	private int year;
	
	// Access modifier  public
	// Data type        double
	// Name             price
	public  double price;
}
```


## Methods
A method is a type qof function in Java/OOP.
In java various methods can have the same name, if their method signature is different.

### Method Signature
Method signature is the **method name**, the **number**, and the **type of parameters** of a method. it does NOT contain the return type!!!
```java
public int addNumbers(int a, int b) {
	// code...
}
```


# See Also
[[$ Object Oriented Programming]]
