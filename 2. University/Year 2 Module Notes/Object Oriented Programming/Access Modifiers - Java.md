---
tags:
  - Object-Oriented-Programming
  - Java
aliases:
---
## What is an Access Modifier?
It allows you to specify the scope of an object, variable, class


## Visibility Levels

| Access Modifier | Visibility (sorted descending)                               |
| --------------- | ------------------------------------------------------------ |
| public          | Can be accessed **EVERYWHERE**                               |
| protected       | Only in the same **package** and **subclasses** (in any pkg) |
| default         | Only in the same **package**                                 |
| private         | Only in the **class**                                        |

### Public Attributes
Public attributes can be accessed outside of its class. This means that any value can be set, **bad data**.
```java showlinenumbers
public int age;
```


### Protected Attributes
Protected attributes can only be accessed inside of its class and subclasses.
To access them otherwise, you will need to create [[Getters & Setters, And Gatekeeping - Java|setters and getters]]
```java showlinenumbers
protected int age;
```


### Default Attributes
The default java access modifier allows you to access it anywhere within the same package
```java showlinenunbers
int age;
```


### Private Attributes
Private attributes can only be accessed inside of its class.
To access them otherwise, you will need to create [[Getters & Setters, And Gatekeeping - Java|setters and getters]]
```java showlinenumbers
private int age;
```


# See Also
[[$ Java - Programming Language]]
