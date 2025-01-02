---
tags:
  - C
  - ComputerScience
  - Casting
---
- Casting in C, allows us to convert a variable from one type to another
- **IT DOES NOT CHANGE THE ORIGINAL VARIABLE TYPE.** It only changes it for that specific line/calculation.
- An integer divided by an integer, only returns an integer!

## Explicit Casting

``` c
// The test variable is now a float
float test = 10.75;
// This now turns test into an integer
int newTest = (int)test


// age is a integer
int age = 10;
// now it changes age into a float
float message = (float)age;
```
- Explicit casting is when you manually cast a variable into another type.

## Implicit Casting

``` c
int var1 = 1
float var2 = 1.5

float answer

// var1 is cast into a float, through implicit casting
answer = var1 + var2
```
- Implicit casting is when the compiler automatically casts a variable to another type

## Order of Precedence
A variable can only be casted into a lower data type than itself
This is the order of precedence, from highest to lowest
- **Bool**
- **Char**
- Short Int
- **Int**
- Unsigned Int
- Long
- unsigned
- Long long
- **Float**
- Double
- Long Double

## Dangers with Casting
``` c
// The pi variable is a float
float pi = 3.14159

// I cast the float into an integer
int coolNumber = (int)pi

// However, because I casted a float into an integer, the value of coolNumber can only be 3
```
- Converting a float into an integer, looses the numbers after the decimal point

# See Also