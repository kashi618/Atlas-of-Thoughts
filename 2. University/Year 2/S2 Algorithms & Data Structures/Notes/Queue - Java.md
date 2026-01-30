---
tags:
  - AlgorithmsAndDataStructures
aliases:
---
```java
class Queue {
	class Node {
		int data;
		Node next;	
	}
	
	private Node head;
	private Node tail;
	
	public void enqueue(int x) {
		if (head == null) {
			Node newNode = new Node();
			
			newNode.data = x;
			
			head = newNode;
			tail = newNode;
		}
		else {
			
			
		}
	}
	
	public void dequeue() {
	
	}
}
```

# See Also
[[$ Algorithms & Data Structures]]
