---
tags:
  - Object-Oriented-Programming
  - Java
aliases:
---
## JavaDoc Commenting
**JavaDoc Comment**
```java showlinenumbers
/** This is a JavaDoc Comment */
```
- JavaDoc comment must be placed immediately before the declaration of a class, interface, method/constructor, or public/protected field you are documenting.
- JavaDoc also **SUPPORTS HTML syntax**

### JavaDoc Tags

| Tag      | Description                   |
| -------- | ----------------------------- |
| @param   | Parameter description         |
| @return  | Method return descriptoin     |
| @throws  | List exceptions thrown        |
| @author  | Author of the code            |
| @version | Code version                  |
| @see     | Reference related to the code |

### JavaDoc Template
```java showlinenumbers
/**
* Short, one-line description of the method
* <p>
* Optional longer description of the method.
* You can include information about how the
* code works, important context information,
* etc
* </p>
* 
* @param parametertName description of a parameter
* @param parameterName2 description of parameters
* @return description of return value
* @throws ExceptionName names of error conditions
*/
```
**JavaDoc Example**
```java showlinenumbers
/** 
* Sets the current year
* Must be after 1900
* @param startYear starting year
* @author kashi
*/
public void setYear(int startYear) {
	if (startYear>1900) {
		this.startYear = startYear;
	}
	else {
		System.out.println("Fuk off");
	}
}
```

# See Also
[[$ Java - Programming Language]]
