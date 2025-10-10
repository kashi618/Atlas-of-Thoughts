---
tags:
  - Object-Oriented-Programming
  - Java
aliases:
---
Methods are essentially functions, just a different term used in OOP.
They allow the developer to reuse blocks of code.

## Syntax for Method
```java showlinenumbers
accessModifier returnType methodName(datatype parameterName) {
	// code here
}
```

**Example**
```java showlinenumbers
public void hello(int age) {
	System.out.println("Hello! You are "+age);
}
```

## Method Signature
In java, the method signature only consists of the method name and its parameters

**Example**
From the method above, the following is its method signature
```java showlinenumbers
hello(int age)
```


# See Also
[[$ Object Oriented Programming]]
[[Method Overloading - Java]]