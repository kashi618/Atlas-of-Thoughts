---
tags:
  - C
aliases:
---
- Casting in C, allows us to convert a variable from one type to another.
- **IT DOES NOT CHANGE THE ORIGINAL VARIABLE TYPE.** It only changes it for that specific line/calculation.
- An integer divided by an integer, only returns an integer!
## How to Cast a Variable
Here is an example on how to cast a float into an integer.
```c showlinenumbers
float float_pi = 3.141592654;
int int_pi = (int)pi;
```
In this case, the value of `int_pi` is `3`/

## Explicit Casting
- Explicit casting is when you **manually** cast a variable into another type.
```c showlinenumbers
int var1 = 1;
float var2 = 1.5;
float answer = var1 + (int)var2;
```
In this case, the answer would be `2`

## Implicit Casting
- Implicit casting is when the compiler **automatically** casts a variable to another type.
```c showlinenumbers
int var1 = 1;
float var2 = 1.5;
float answer = var1 + var2;
```
In this case, the answer would be `2.5`, because the compiler automatically casted the `var1` into a float.
**NOTE:** Try not to use implicit casting, as it makes the code ambiguous.

## Order of Precedence
A variable can only be casted into a lower data type than itself. This is the order of precedence, from highest to lowest.
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

# See Also
[[$ C - Programming Language]]