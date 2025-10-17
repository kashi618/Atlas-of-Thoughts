---
tags:
  - Object-Oriented-Programming
  - Java
aliases:
---
A type of method that allows you to "construct" and initialize the attributes of a class. 
```java showlinenumbers
class Vehicle {
	String model;
	String engineType;
	int horsePower;
	
	// --- Constructor --- //
	public Vehicle(String model, String engineType, int horsePower) {
		this.model      = model;
		this.engineType = engineType;
		this.horsePower = horsepower;
	}
	// --- Constructor --- //
}
```

**Note:** java allows multiple methods/constructors with the same name. Please see [[Method Overloading - Java|method overloading]].
**Note2:** constructors do NOT need any return types. Not even a `void`.

# See Also
[[$ Object Oriented Programming]]
[[Method Overloading - Java]]
