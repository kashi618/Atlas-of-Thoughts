---
tags:
  - DataCommunications
aliases:
---
```java
class Stack {
	class Node {
		int data;
		Node next;
	}
	
	private Node top;
	
	public Stack() {
		top = null;
	}
	
	public int pop() {
		if (top != null) {
			int val = top.data;
			top = top.next;
			
			return val; 
		}
		else {
			System.out.println("ERROR: Stack empty");
			return -1;
		}
	}
	
	public void push(int x) {
		Node newNode = new Node();
		
		newNode.data = x;
		newNode.next = top;
		
		top = newNode;
	}
}
```
- Remember that Java has automatic garbage collection. There is no need to "free()" the node that is popped
- 
# See Also
[[$ Data Communications]]