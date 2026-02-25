Okay, I need to create a study guide for the CMPU1001 exam based on the provided questions. Let me start by breaking down each question part and understanding what's required.

First, Question 1(a)i asks about recursion in the Divide and Conquer paradigm. I should explain what recursion is and how it's used in Divide and Conquer. Examples like quicksort or merge sort would work here. Need to make sure I connect recursion with dividing the problem into smaller subproblems.

For part ii, comparing two algorithms' performance. The main technique here is Big-O analysis. I need to outline that even if both algorithms are correct, their efficiency can be compared using time and space complexity, specifically Big-O notation. Maybe mention empirical testing as well, but emphasize Big-O.

Question 1(b) is about Tower of Hanoi. Part i is defining the puzzle. I should describe the problem: moving disks between pegs with rules. Part ii requires writing the algorithm, which is typically recursive. The standard recursive solution involves moving n-1 disks, then the nth disk, then n-1 again. For part iii, a stack trace with 3 disks. I need to show each recursive call step by step. Part iv asks complexity, which is O(2^n) or O(2^n -1), but exponential in any case.

Part c)i is identifying the algorithm. The code seems like selection sort because of the min selection in each iteration. But there are errors. Looking at the code: the outer loop runs from 0 to N-1, then inner from i to N. The swap uses A[j] which might be out of bounds. The correct code should swap A[i] with A[min]. So the errors are in the swapping part and the indices. Need to list each error and correction.

Moving to Question 2 on merge sort. Part a)i requires merging two sorted halves [3,6,7,8] and [3,4,5,6]. The merged list would combine them by comparing elements. The merge process would step through each element. Part a)ii is writing the merge algorithm. It should take two arrays, compare elements, and merge into one sorted array. Part b) sort trace for [8,7,6,5,4,3,2,1]. Merge sort divides the list into halves recursively until single elements, then merges them. The trace would show splitting and merging steps. Part c) asks improving merge sort. Maybe using insertion sort for small sublists (hybrid method) to reduce overhead. Pseudocode would show switching to insertion sort when the sublist size is small. The Big-O improvement might still be O(n log n) but with better constants.

Question 3 covers ADTs. Part a)i defines Abstract Data Type as a model with operations, separate from implementation. Examples include Stack, Queue, BST. For part ii, each ADT needs a description and example. Stack is LIFO with push/pop. Queue is FIFO with enqueue/dequeue. BST is a tree with left < root < right. Part b)i list implementations: array and linked list. Array has fast access but slow insertions. Linked list has dynamic size but slower access. Part ii and iii require pseudocode for inserting and deleting in an ordered list. For insertion, find the correct position and shift elements (array) or adjust pointers (linked list). Deletion similarly requires finding the element and adjusting the structure.

Question 4a)i is drawing a BST from the given data. Start with 9 as root, then insert 4, 3, 18, etc. Need to ensure BST properties. Part ii traversal methods: in-order, pre-order, post-order. Show each traversal step. Part b) Eight-Puzzle description: 3x3 grid with tiles, sliding into empty space. First six states would show initial moves. Part c) BFS algorithm using a queue. Iterative approach: enqueue root, then dequeue and enqueue children, repeating until the node is found.

Now, compiling all this into a structured study guide. Each question part needs core concepts, step-by-step answering instructions, and key points to study. For example, recursion, Big-O, Tower of Hanoi algorithm, selection sort errors, merge sort process, ADTs, list implementations, BST traversal, BFS pseudocode.

Need to ensure explanations are clear, examples are provided, and common mistakes (like selection sort errors) are highlighted. Also, ensure that pseudocode examples are accurate and adhere to standard conventions. For the merge sort trace, maybe show each split and merge step. For the BST, draw the tree step by step.

Potential pitfalls: confusing recursion with iteration in algorithms, mixing up ADT definitions with their implementations, incorrect complexity analysis (like Tower of Hanoi being O(2^n) instead of O(n^2)), and errors in pseudocode syntax. Need to emphasize understanding each concept's fundamentals and practicing problem-solving steps.

### Study Guide for CMPU1001 Exam: Algorithm Design and Problem Solving  
**Programmes: TU856, TU858**  
**Key Topics & Answering Strategies**  

---

#### Question 1: Core Concepts  
**1(a)i. Recursion in Divide and Conquer**  
- **Core Concept**:  
  Recursion solves problems by breaking them into smaller, identical subproblems. Divide and Conquer splits a problem into parts, solves each part recursively, and combines results.  
  - **Examples**: Merge Sort (split list, sort halves, merge), Quick Sort (pivot partitioning).  
- **Answering Strategy**:  
  1. Define recursion (self-referential function calls).  
  2. Link to Divide and Conquer: Split problem → solve subproblems recursively → combine.  
  3. Use Merge Sort as an example.  

**1(a)ii. Comparing Algorithm Performance**  
- **Core Concept**: Use **asymptotic analysis (Big-O notation)** to compare time/space complexity.  
- **Answering Strategy**:  
  1. Explain Big-O (worst-case growth rate).  
  2. Compare algorithms’ Big-O (e.g., O(n²) vs. O(n log n)).  
  3. Mention empirical testing (run-time on large inputs) as a secondary method.  

---

**1(b)i. Tower of Hanoi Puzzle**  
- **Core Concept**: A puzzle with 3 pegs and disks of decreasing sizes. Rules: Move one disk at a time; no larger disk on top of a smaller one.  
- **Answering Strategy**: Describe the problem, rules, and goal (transfer all disks to another peg).  

**1(b)ii. Tower of Hanoi Algorithm**  
- **Algorithm (Pseudocode)**:  
  ```python  
  def TowerOfHanoi(n, source, target, auxiliary):  
      if n > 0:  
          TowerOfHanoi(n-1, source, auxiliary, target)  
          print(f"Move disk {n} from {source} to {target}")  
          TowerOfHanoi(n-1, auxiliary, target, source)  
  ```  
- **Explanation**: Recursively move \(n-1\) disks to the auxiliary peg, move the nth disk, then move \(n-1\) disks to the target.  

**1(b)iii. Stack Trace for 3 Disks**  
- **Steps**:  
  1. Move disk 1 from A → C.  
  2. Move disk 2 from A → B.  
  3. Move disk 1 from C → B.  
  4. Move disk 3 from A → C.  
  5. Move disk 1 from B → A.  
  6. Move disk 2 from B → C.  
  7. Move disk 1 from A → C.  

**1(b)iv. Complexity of Tower of Hanoi**  
- **Answer**: \(O(2^n)\) (exponential time).  

---

**1(c)i. Identify the Algorithm**  
- **Answer**: **Selection Sort** (finds minimum element in each iteration).  

**1(c)ii. Errors in the Code**  
- **Errors & Corrections**:  
  1. `min = A[i]` → `min = i` (track indices, not values).  
  2. `temp = A[j]` → `temp = A[min]` (swap with the correct index).  
  3. `A[min] = A[i]` → `A[min], A[i] = A[i], A[min]` (swap correctly).  

---

#### Question 2: Merge Sort  
**2(a)i. Merging Two Sorted Halves**  
- **Example**:  
  Merge [3,6,7,8] and [3,4,5,6] → [3,3,4,5,6,6,7,8].  
- **Steps**: Compare elements from both lists, add the smaller to the result.  

**2(a)ii. Merge Algorithm**  
- **Pseudocode**:  
  ```python  
  def merge(left, right):  
      result = []  
      i = j = 0  
      while i < len(left) and j < len(right):  
          if left[i] < right[j]:  
              result.append(left[i])  
              i += 1  
          else:  
              result.append(right[j])  
              j += 1  
      result.extend(left[i:])  
      result.extend(right[j:])  
      return result  
  ```  

**2(b) Merge Sort Trace**  
- **Steps for [8,7,6,5,4,3,2,1]**:  
  1. Split into [8,7,6,5], [4,3,2,1].  
  2. Recursively split until single elements.  
  3. Merge pairs: [7,8], [5,6], then [5,6,7,8]; similarly for the right half.  
  4. Final merge: [1,2,3,4,5,6,7,8].  

**2(c) Improving Merge Sort**  
- **Improvement**: Use **Insertion Sort for small subarrays** (e.g., when \(n \leq 15\)).  
- **Pseudocode**:  
  ```python  
  def hybrid_sort(arr):  
      if len(arr) <= 15:  
          insertion_sort(arr)  
      else:  
          mid = len(arr) // 2  
          hybrid_sort(left), hybrid_sort(right)  
          merge(left, right)  
  ```  
- **Performance**: Reduces constant factors (still \(O(n \log n)\)).  

---

#### Question 3: Abstract Data Types (ADTs)  
**3(a)i. ADT Definition**  
- **Core Concept**: A data type defined by its behavior (operations) separate from implementation (e.g., Stack’s LIFO behavior).  

**3(a)ii. ADT Examples**  
- **Stack**: LIFO; `push()`, `pop()`. Example: Browser back button.  
- **Queue**: FIFO; `enqueue()`, `dequeue()`. Example: Printer queue.  
- **BST**: Tree with left < root < right. Example: Dictionary lookup.  

**3(b)i. List Implementations**  
- **Array List**: Fast access (\(O(1)\)), slow insertion (\(O(n)\)).  
- **Linked List**: Slow access (\(O(n)\)), fast insertion (\(O(1)\)).  

**3(b)ii. Insert into Ordered List**  
- **Pseudocode**:  
  ```python  
  def insert_ordered(list, value):  
      index = 0  
      while index < len(list) and list[index] < value:  
          index += 1  
      list.insert(index, value)  
  ```  

**3(b)iii. Delete from Ordered List**  
- **Pseudocode**:  
  ```python  
  def delete_ordered(list, value):  
      if value in list:  
          index = list.index(value)  
          list.pop(index)  
  ```  

---

#### Question 4: Binary Search Trees (BSTs) & BFS  
**4(a)i. BST Construction**  
- **Steps**: Insert [9,4,3,18,2,11,10,9,12,15] → Root=9, left=4, left=3, etc.  

**4(a)ii. Tree Traversal Methods**  
1. **In-order**: Left, Root, Right → Sorted output.  
2. **Pre-order**: Root, Left, Right.  
3. **Post-order**: Left, Right, Root.  

**4(b) Eight-Puzzle**  
- **Description**: 3x3 grid with 8 tiles and 1 empty space. Goal: Rearrange tiles into order.  
- **First 6 States**: Show initial moves (e.g., slide tile 2 down, tile 3 right, etc.).  

**4(c) BFS Algorithm**  
- **Pseudocode**:  
  ```python  
  def BFS(root, target):  
      queue = [root]  
      while queue:  
          node = queue.pop(0)  
          if node == target:  
              return node  
          queue.extend(node.children)  
  ```  

---

### Key Study Tips 
1. **Practice Pseudocode**: Write algorithms for sorting, BST operations, and BFS.  
2. **Trace Examples**: Manually simulate Merge Sort, Tower of Hanoi, and BST traversals.  
3. **Memorize Big-O**: Know complexities of sorting algorithms (e.g., Merge Sort \(O(n \log n)\)).  
4. **Understand ADTs**: Differentiate between behavior (Stack/Queue) and implementations (array vs. linked list).  

Good luck! 🚀