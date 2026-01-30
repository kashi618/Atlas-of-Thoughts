---
tags:
  - AlgorithmsAndDataStructures
aliases:
---
```java
class Stack {
	class Node {
		int data;
		Node next;
	}
	
	private Node top;
	
	public Stack() { // Not strictly needed...
		top = null;
	}
		
	public void push(int x) {
		Node newNode = new Node();
		
		newNode.data = x;
		newNode.next = top;
		
		top = newNode;
	}
	
	public int pop() {
		if (top == null) {
			System.out.println("ERROR: Stack empty");
			return -1; // Returning -1 isnt that good...
		}
		
		int val = top.data;
		top = top.next;
		
		return val; 
	}
}
```
- Remember that Java has automatic garbage collection. There is no need to "free()" the node that is popped
- 
# See Also
[[$ Algorithms & Data Structures]]
[[$ Java - Programming Language]]