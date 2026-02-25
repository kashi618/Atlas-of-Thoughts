---
tags:
  - AlgorithmsAndDataStructures
aliases:
---
```java
// Remove from head, add to tail
class Queue {
	class Node {
		int data;
		Node next;	
	}
	
	private Node head;
	private Node tail;
	
	public Queue() { // Not strictly needed..
		head = null;
		tail = null;
	}
	
	// Remove node from tail
	public void enqueue(int x) {
		Node newNode = new Node();
		newNode.data = x;
		newNode.next = null;
		
		// When head and tail is empty (empty queue)
		if (head == null) {
			head = newNode;
		}
		
		// Non-empty queue
		else {
			tail.next = newNode;
		}
		
		tail = newNode;
	}
	
	// Remove node from head
	public int dequeue() {
		if (head == null) {
			System.out.println("Error: Queue empty");
			return -1; // Returning -1 isnt that good...
		}
		
		int val = head.data;
		head = head.next;
		
		// check if queue is mepty
		if (head == null) {
			tail = null;
		}
		
		return val;	
	}
}
```

# See Also
[[$ Algorithms & Data Structures]]
