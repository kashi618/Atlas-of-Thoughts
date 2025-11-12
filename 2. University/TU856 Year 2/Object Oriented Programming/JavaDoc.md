---
tags:
  - Object-Oriented-Programming
  - Java
aliases:
---

## What is it?
Documentation tool built into the JDK.
It converts special comments into HTML documentation.

## Syntax
**JavaDoc Comment**
```java showlinenumbers
/** This is a JavaDoc Comment */
```
- JavaDoc comment must be placed immediately before the declaration of a class, interface, method/constructor, or public/protected field you are documenting.

**JavaDoc Example**
```java showlinenumbers
/** 
* Sets the current year
* Must be after 1900
* @param startYear starting year
*/
public void setYear(int startYear) {
	this.startYear = startYear;
}
```
### JavaDoc Tags

| Tag      | Description                   |
| -------- | ----------------------------- |
| @param   | Parameter description         |
| @return  | Method return descriptoin     |
| @throws  | List exceptions thrown        |
| @author  | Author of the code            |
| @version | Code version                  |
| @see     | Reference related to the code |

## Tips
- Be concise: The first sentence is the summary
- Focus on the contract: Describe *what* the element does, not *how* you implemented it
- Document Public API: Only document public and protected items.

# See Also
[[$ Java - Programming Language]]
