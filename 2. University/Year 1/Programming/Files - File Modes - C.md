---
tags:
  - C
aliases:
---
## Table of Modes
**ASCII files**

| Mode   | Action                                                                                                |
| ------ | ----------------------------------------------------------------------------------------------------- |
| `"r"`  | Opens an **existing** file for reading.                                                               |
| `"w"`  | Opens an **existing** file for writing. However, it first clears the file. (makes file empty)         |
| `"a"`  | Opens an **existing** file for writing. However, data is written/appended to the end of the file      |
|        |                                                                                                       |
| `"r+"` | Opens/creates file for reading and writing. However, data is added where it is specified.             |
| `"w+"` | Opens/creates file for reading and writing. However, it first clears the file (makes file empty).     |
| `"a+"` | Opens/creates file for reading and writing. However, data is written/appended to the end of the file. |
Usually `"a+"` is used, as it is the safest.

**Binary Files**
Just add `"b"` to the end of the modes used above.
Example: `"w+b"`, `"ab"`
# See Also
[[$ C - Programming Language]]s