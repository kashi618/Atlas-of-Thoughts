---
tags:
  - Object-Oriented-Programming
  - Java
aliases:
---
## ArrayList Package
To use ArrayList in java, you will need to import it from `java.util` package
```java showlinenumbers
import java.util.ArrayList;
```

## Creating an ArrayList
```java showlinenumbers
// Default ArrayList (default size: 20)
ArrayList<String> stringList = new ArrayList<String>();

// ArrayList with set initial capacity (set size: 100)
ArrayList<Animal> animalList = new ArrayList<Animal>(100);
```

**ArrayList Constructor**
```java showlinenumbers
public ArrayList<Base_Type> (int initialCapacity);
public ArrayList<Base_Type> ();
```


### ArrayList Methods
**Add element to end of array**
```java
public void add(Base_Type newElement);
```

**Add element to specified index**
```java
public void add(int index, Base_Type newElement);
```

**Returns element at index**
```java
public Base_Type get(int index);
```



# See Also
[[$ Java - Programming Language]]
