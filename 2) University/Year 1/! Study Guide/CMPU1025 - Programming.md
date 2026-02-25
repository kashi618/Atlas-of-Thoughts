Okay, let's tackle this. The user wants a study guide for the C programming exam questions provided. They want detailed instructions on how to answer each question, core concepts to study, and a study guide. Let me start by going through each question in Sections A and B to understand what's being asked.

Starting with Section A, question 1 has multiple parts from (a) to (p). Each part is a different C concept. Let's break them down one by one.

For example, part (a) is about correcting errors in a do-while loop. Common mistakes here might be missing semicolons after the while condition, incorrect placement of braces, or using the wrong variable in the condition. The core concept here is understanding loop structures in C, especially do-while loops.

Part (b) involves understanding pre-increment and post-increment operators. The key is to track the values of variables step by step. The output depends on when the increments happen. So, the student needs to know operator precedence and order of evaluation.

Part (c) is about escape characters in printf. The string given has quotes and a backslash, so they need to use \" for the quotes and \\ for the backslash. This tests knowledge of string formatting in C.

Part (d) asks about the purpose of the switch statement. Here, the student should explain that switch is used for multi-way branching based on the value of an expression, and compare it to if-else ladders.

Part (e) looks at array initialization. The code has a syntax error because the array is declared as int my_array[2][3], but the initialization mixes data with a variable declaration. The student needs to spot that and correct the structure.

Part (f) is about parameter passing: pass by value vs pass by reference. The student should explain that in C, all parameters are passed by value, but pointers can simulate pass by reference. They need to differentiate between the two concepts.

Part (g) tests array initialization. When an array is partially initialized, the remaining elements are set to zero. So, the output would be 1.0 followed by zeros. The student needs to understand array initialization rules.

Part (h) is about pointers. They have to assign ptr to point to number, then print using *ptr. This checks pointer declaration, assignment, and dereferencing.

Part (i) asks about variable scope. The student should explain local, global, and block scope, and how variables are accessible in different parts of the code.

Part (j) deals with returning a pointer to a local variable. The bug here is that my_char is a local variable, and returning its address leads to a dangling pointer. The student needs to recognize this as undefined behavior.

Part (k) requires creating a struct with specific fields. The struct should have a char array for first name and an int for age. The student must know struct syntax and how to declare members.

Part (l) uses pointer notation for array input and output. Instead of using my_array[i], they should use *(my_array + i). This tests understanding of pointers and array equivalence.

Part (m) is about file handling. Opening a file for appending uses fopen with mode "a". The student needs to know different file modes and proper fopen usage.

Part (n) looks at string termination. The array message is initialized without a null terminator, so it's not a proper C string. However, since the loop prints each character, the bug might be minimal here, but perhaps the array should be null-terminated for string handling.

Part (o) compares fputc and fputs. Writing large text is more efficient with fputs because it writes entire strings at once, reducing the number of function calls. The student should explain efficiency considerations.

Part (p) tests static variables and function parameters. The static variable in main retains its value, but since it's passed by value to the function, the increments in the function don't affect the main's num. The output would be 2, 2, 2 each time.

Moving to Section B, question 2 is a programming problem. The dentist app needs to input the number of patients, their fees, calculate total and average, and save to a file. The student needs to use arrays or dynamic memory, loops for input, calculations, and file writing. Key concepts here are control structures, arrays, file I/O, and basic arithmetic.

Question 3(a) is about checking palindromes. The user inputs a string, and the program checks if it's the same reversed. The student needs to loop from both ends, compare characters, and handle even and odd lengths. Then, modify the program to concatenate with a string literal for part (b), using strcat or pointer manipulation.

Now, the study guide should cover all these concepts: loops, operators, strings, arrays, pointers, structs, file I/O, scope, parameter passing, memory management, and problem-solving for specific tasks like palindrome checking.

For each question in Section A, I'll outline the steps to answer, common pitfalls, and core concepts. For Section B, I'll explain the approach to building the program step by step, handling input, calculations, and file operations, and then the palindrome problem.

The core concepts to study would include:

- Syntax and structure of C programs
- Variables and data types
- Control structures (loops, conditionals)
- Functions and parameter passing
- Arrays and pointers
- Strings and character handling
- Structures and memory allocation
- File input/output operations
- Common errors and debugging in C

The study guide should organize these topics, provide examples, and practice problems similar to the exam questions. It should also emphasize understanding how to trace code execution, especially with pointers and operator precedence.


### Study Guide for CMPU1025 Programming Exam

This guide provides detailed solutions, core concepts, and study strategies for each exam question. Focus on understanding the underlying principles to tackle similar problems effectively.

---

### Section A: Core Concepts & Solutions

#### 1(a) Correct the C Code Segment
- **Task:** Fix the `do-while` loop.
- **Solution:**
  ```c
  int i = 0;
  do {
      printf("i is %d", i);
      i++;
  } while (i < 10); // Correct variable and add semicolon
  ```
- **Key Concepts:**
  - `do-while` syntax: The loop body executes before checking the condition.
  - Missing semicolon after `while` and incorrect variable (`num` → `i`).

---

#### 1(b) Output of the Program
- **Task:** Track variable values with increment operators.
- **Solution:**  
  `num3 is 2 and num4 is 3`
- **Steps:**
  1. `num3 = ++num1;` → `num1` becomes 2, `num3 = 2`.
  2. `num4 = num2++ + --num3;` → `num2` is 2 (post-increment), `num3` becomes 1 (pre-decrement).  
     `num4 = 2 + 1 = 3`.
- **Concept:** Pre-increment (`++x`) vs. post-increment (`x++`).

---

#### 1(c) Print String with Escape Characters
- **Task:** Use `printf` to display special characters.
- **Solution:**
  ```c
  printf("\"Place a \\ before the character 'n' in a printf() to move to a new line\", she said.\n");
  ```
- **Concept:** Escape sequences (`\"`, `\\`, `\n`).

---

#### 1(d) Purpose of `switch` Statement
- **Answer:**  
  The `switch` statement simplifies multi-way decision-making based on the value of an expression (e.g., `int` or `char`). It’s cleaner than nested `if-else` for fixed cases.
- **Example:**
  ```c
  switch (grade) {
      case 'A': printf("Excellent"); break;
      case 'B': printf("Good"); break;
      // ...
  }
  ```

---

#### 1(e) Explain and Fix Array Initialization
- **Issue:** Mixing data and variable declaration.  
- **Correct Code:**
  ```c
  int my_array[2][3] = {
      {1, 2, 3},
      {4, 5, 6}
  };
  ```
- **Concept:** 2D arrays require nested braces for rows.

---

#### 1(f) Pass by Value vs. Pass by Reference
- **Answer:**
  - **Pass by Value:** A copy of the variable is passed; changes inside the function don’t affect the original.
  - **Pass by Reference:** Achieved using pointers; changes affect the original variable.
- **Example:**
  ```c
  void byValue(int x) { x = 10; }   // No effect outside
  void byRef(int *x) { *x = 10; }   // Modifies original
  ```

---

#### 1(g) Output of Array Program
- **Output:** `1.0 0.0 0.0 0.0 0.0`  
- **Concept:** Partial array initialization sets remaining elements to zero.

---

#### 1(h) Print Using a Pointer
- **Solution:**
  ```c
  ptr = &number;
  printf("%.1f", *ptr);
  ```
- **Concept:** Pointer assignment and dereferencing.

---

#### 1(i) Variable Scope
- **Answer:** Scope defines where a variable is accessible. Local variables exist within their block; global variables are accessible everywhere.

---

#### 1(j) Bug: Returning Local Variable Address
- **Issue:** `my_char` is a local variable; its address becomes invalid after the function exits (dangling pointer).

---

#### 1(k) Create a Structure Template
- **Solution:**
  ```c
  struct Individual {
      char firstName[16]; // +1 for null terminator
      int age;
  };
  ```

---

#### 1(l) Pointer Notation for Array I/O
- **Solution:**
  ```c
  // Input
  for (int i = 0; i < 5; i++) {
      scanf("%f", my_array + i);
  }
  // Output
  for (int i = 0; i < 5; i++) {
      printf("%.1f ", *(my_array + i));
  }
  ```

---

#### 1(m) Open File for Appending
- **Solution:**
  ```c
  FILE *file = fopen("file.txt", "a");
  ```

---

#### 1(n) Potential Bug in String Code
- **Issue:** `message` lacks a null terminator (`\0`), making it unsafe for string functions like `printf("%s")`.

---

#### **1(o) `fputc()` vs. `fputs()`**
- **Answer:** Use `fputs()` for large text—it writes entire strings efficiently, reducing overhead compared to character-by-character writes with `fputc()`.

---

#### 1(p) Output of Static Variable Program
- **Output:**  
  ```
  num is 2
  num is 2
  num is 2
  ```
- **Concept:** `static` in `main` retains value, but `num` is passed by value to `function`, so increments in `function` don’t affect `main`.

---

### Section B: Programming Problems

#### 2. Dental Practice Software
- **(a) Input Number of Patients and Fees**
  ```c
  int num_patients;
  printf("Enter number of patients: ");
  scanf("%d", &num_patients);
  float fees[num_patients];
  for (int i = 0; i < num_patients; i++) {
      printf("Enter fee for patient %d: ", i+1);
      scanf("%f", &fees[i]);
  }
  ```

- **(b) Calculate Total and Average**
  ```c
  float total = 0;
  for (int i = 0; i < num_patients; i++) {
      total += fees[i];
  }
  float avg = total / num_patients;
  printf("Total: %.2f\nAverage: %.2f\n", total, avg);
  ```

- **(c) Save to File**
  ```c
  FILE *file = fopen("fees.txt", "a");
  fprintf(file, "Total: %.2f, Average: %.2f\n", total, avg);
  fclose(file);
  ```

---

#### 3. Palindrome Checker
- (a) Check Palindrome
  ```c
  char str[21];
  printf("Enter a string (max 20 chars): ");
  scanf("%20s", str);
  int len = strlen(str);
  int is_palindrome = 1;
  for (int i = 0; i < len/2; i++) {
      if (str[i] != str[len - 1 - i]) {
          is_palindrome = 0;
          break;
      }
  }
  printf(is_palindrome ? "yes\n" : "no\n");
  ```

- **(b) Concatenate Strings**
  ```c
  char result[50] = "You entered: ";
  strcat(result, str);
  printf("%s\n", result);
  ```

---

### Core Study Topics
1. **Syntax & Control Structures:** Loops (`for`, `while`, `do-while`), conditionals (`if-else`, `switch`).
2. **Data Types & Variables:** Arrays, pointers, structs, scope, static variables.
3. **Functions:** Parameter passing (value vs. reference), return types.
4. **String & File Handling:** `printf`/`scanf`, escape sequences, `fopen` modes, `fputs`/`fputc`.
5. **Memory Management:** Dangling pointers, array initialization.
6. **Problem Solving:** Palindromes, dynamic input handling, file I/O.

### Study Tips
- Practice tracing code execution for increment/decrement operators.
- Write small programs to test concepts like pointer notation and structs.
- Use online compilers (e.g., OnlineGDB) to debug code snippets.
- Review past exam papers for similar patterns.