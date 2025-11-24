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

### JavaDoc Tags

| Tag      | Description                   |
| -------- | ----------------------------- |
| @param   | Parameter description         |
| @return  | Method return descriptoin     |
| @throws  | List exceptions thrown        |
| @author  | Author of the code            |
| @version | Code version                  |
| @see     | Reference related to the code |

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
