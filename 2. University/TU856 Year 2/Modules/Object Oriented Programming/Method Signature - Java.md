---
tags:
  - Object-Oriented-Programming
  - Java
aliases:
---
In java, the method signature only consists of the **method name** and its **parameters**.

It is very useful for [[Method Overloading - Java|method overloading]], because it is what makes a method unique to other methods of the same name.

**Example**
Lets say there was this method
```java showlinenumbers
public void startCar(String model) {
	system.out.println("Model is "+model);
}
```

The method signature would be this
```java showlinenumbers {1}
startCat(String model)
```

# See Also
[[$ Object Oriented Programming]]
[[Methods - Java]]
