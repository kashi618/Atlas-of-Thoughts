## Basic Information
- Car parts firm that takes orders from customer, and ships via a logistics company
- Customer orders divided into 4 teams
- Each of the 4 teams stores finished product in an appropriate bin
- Each part has a **name**, a **weight**, a **price**, and a **target car engine**

- Delivery is charged by weight
- More parts can be delivered by fitting more in a delivery van
- Automated picker is used to prepare orders from delivery
- Each order is picked from the appropriate bin

**What I have to do**
- Producing delivery docket for each van
- Products are packed, sorted by weight (light -> heavy)

**What information I have access to**

| Type of information     | Format                      |
| ----------------------- | --------------------------- |
| Line Code               | Numeric                     |
| Batch Code              | Numeric                     |
| Batch Date & Batch Time | Numeric (day, hour, minute) |
| Product ID              | Numeric                     |
| Product Name            | Text                        |
| Target Engine Code      | Text                        |
| Bin Number              | Numeric                     |

## Deliverables
### 1) Design a data structure for the project.
```c showlinenumbers
struct batchDate {
    int day;
    int hour;
    int minute;
};
struct product {
    int lineCode;
    int batchCode;
    int batchDate; // day, hour, minute
    int productId;
    char productName[SIZE];
    char targetEngineCode[SIZE];
    int binNumber;
    float weight;
    float price;
};
```
- Structure contains all information about each car part, including its weight and price..

### 2) Test Data
For creating the test data, I decided to use the csv file format. This makes it easier to import and export the data about the products.
There are also 4 lines that the company uses, therefore, 4 separate csv test data files needs to be created.

### 3) Test Your Project
**n/a**

### 4) Make Flowchart for Task 2
- Check in folder

### 5) Produce Pseudocode for Tasks 1-4
```

```

### 6) Produce Working C Code for Tasks 1-4
**WIP**

### 7) Create Project Brief

## Tips
- Merge sort by weight
- Binary search by weight

[[aichat Output (Algorithms Project)]]