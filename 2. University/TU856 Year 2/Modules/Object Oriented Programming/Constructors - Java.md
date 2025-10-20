---
tags:
  - Object-Oriented-Programming
  - Java
aliases:
---
A type method that allows you to "construct" and initialize the attributes of a class. 
```java showlinenumbers
class Vehicle {
	String model;
	String engineType;
	int horsePower;
	
	// --- Constructor --- //
	public void Vehicle(String model, String engineType, int horsePower) {
		this.model      = model;
		this.engineType = engineType;
		this.horsePower = horsepower;
	}
	// --- Constructor --- //
}
```

**Note:** java allows multiple methods/constructors with the same name. Please see [[Method Overloading - Java]].

# See Also
[[$ Java - Programming Language]]
[[Method Overloading - Java]]
