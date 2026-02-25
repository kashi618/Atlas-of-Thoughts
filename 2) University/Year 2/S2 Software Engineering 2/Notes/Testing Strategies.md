---
tags:
  - Software-Engineering-2
aliases:
---
## Overview
![[Testing Strategies.png]]

## Unit Testing
Unit testing focuses on testing the smallest part of a program (a unit), in isolation from the rest of the program

**Characteristics**
- Fast to execute
- Tests one thing at a time
- Verifies that a unit of code works correctly, in isolation

## Integration Testing
Tests system components that are working together. Essentially, it focuses on testing the collaboration of multiple units

**Characteristics**
- Tests interactions between units and modules
- Complex, and slower to test than unit testing
- Usually follows a "big bang" or incremental approach

### Top-Down Integration
This approach starts with testing the main units and modules of a program. It uses "stubs" (dummy modules) to simulate the lower-level modules. As testing goes along, the stubs are replaced with the lower-level modules

**Pros**
- Early testing of major functionality and UI's
- Demonstrates the system capabilities
- Critical control logic tested first

**Cons**
- Requires creation of many stubs
- Stubs are complex and time consuming to create
- Low-level modules are tested last, which may hide critical bugs
- Low-level modules are often not adequately tested

### Bottom-Up Integration
This approach starts with testing the low-level modules and units. It uses and creates drivers, to simulate higher-level modules. As testing goes along, the drivers are replaced with the higher-level modules

**Pros**
- Early detection of low-level errors and bugs
- Easier to test, as low-level modules are simpler
- Often used for systems where low-level functionality is critical
- Drivers are easier to create, compared to stubs

**Cons**
- High-level modules tested last
- System's main functionality is tested last

### Comparison

| Aspect                 | Top-Down               |
| ---------------------- | ---------------------- |
| Starting Point         | Low-level modules      |
| Requirements           | Drivers                |
| Best for testing...    | Detailed functionality |
| First defects detected |                        |
|                        |                        |

## Functional Testing


# See Also
[[$ Software Engineering 2]]