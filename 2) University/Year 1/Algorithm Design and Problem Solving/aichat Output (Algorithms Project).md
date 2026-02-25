## 1. Understanding the Problem
You need to design an efficient system to process car parts orders from **4 teams**, sort them by weight, merge them into a single dispatch list, enable searching by weight, and generate a summary report.

### Key Requirements:
- **Task 1:** Sort 4 files by weight (O(N log N) time)
- **Task 2:** Merge 4 sorted files into one (O(N) time)
- **Task 3:** Search for earliest product by weight (O(log N) time)
- **Task 4:** Generate a summary report (O(N) time)

---

## 2. Step-by-Step Implementation Plan

### Step 1: Design the Data Structure
We need a **struct** to store all product attributes:
```c
typedef struct {
    int line_code;          // Team identifier (1-4)
    int batch_code;         // Batch number
    struct {
        int day;            // Day of month (1-31)
        int hour;           // Hour (0-23)
        int minute;         // Minute (0-59)
    } batch_time;
    int product_id;         // Unique product ID
    char product_name[100]; // Product name (e.g., "Brake Pads")
    char target_engine_code[50]; // Engine model (e.g., "V6-2.0L")
    int bin_number;         // Warehouse bin location
    float weight;           // Weight in kg (for sorting)
    float price;            // Price (optional for reporting)
} Product;
```

### Step 2: Generate Test Data
Create **4 CSV files** (`team1.csv`, `team2.csv`, etc.) with at least **10 products each**:
```
line_code,batch_code,day,hour,minute,product_id,product_name,target_engine_code,bin_number,weight,price
1,1001,15,9,30,5001,"Spark Plug","V6-2.0L",12,0.2,8.99
1,1001,15,9,31,5002,"Oil Filter","I4-1.6L",15,0.5,12.50
...
```

### Step 3: Implement Task 1 (Sorting Each File in O(N log N))
- Use **Merge Sort** (O(N log N) guaranteed).
- Read each file, sort by `weight`, and save sorted versions.

**Pseudocode:**
```c
void mergeSort(Product arr[], int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}

void sortFile(const char *filename) {
    Product *products = readFromFile(filename);
    int n = countProducts(filename);
    mergeSort(products, 0, n - 1);
    writeToFile(filename, products);
}
```

### Step 4: Implement Task 2 (Merging Files in O(N))
- Since all files are sorted, use a **4-way merge** (like in Merge Sort but- Since all files are sorted, use a **4-way merge** (like in Merge Sort but- Since all files are sorted, use a **4-way merge** (like in Merge Sort but- Since all files are sorted, use a **4-way merge** (like in Merge Sort but with 4 pointers).
- Compare the smallest element from each file and write to output.

**Flowchart for Task 2:**
```
START
  |
  v
Open 4 input files (sorted)
  |
  v
Initialize output file
  |
  v
While (any file has data left)
  |__ Find smallest weight among current elements
  |__ Write to output
  |__ Move pointer in the selected file
  |
  v
Close all files
  |
  v
END
```

**Pseudocode:**
```c
void mergeFiles(const char *files[], const char *outputFile) {
    FILE *in[4], *out = fopen(outputFile, "w");
    Product current[4];
    int i, minIndex;
    
    for (i = 0; i < 4; i++) in[i] = fopen(files[i], "r");
    
    while (1) {
        minIndex = -1;
        for (i = 0; i < 4; i++) {
            if (!feof(in[i])) {
                if (minIndex == -1 || current[i].weight < current[minIndex]                if (minIndex == -1 || current[i].weight < current[minIndex]                if (minIndex == -1 || current[i].weight < current[minIndex].weight)
                    minIndex = i;
            }
        }
        if (minIndex == -1) break; // All files exhausted
        writeProduct(out, current[minIndex]);
        readNextProduct(in[minIndex], &current[minIndex]);
    }
    
    for (i = 0; i < 4; i++) fclose(in[i]);
    fclose(out);
}
```

### Step 5: Implement Task 3 (Binary Search in O(log N))
- Since the merged file is sorted, **Binary Search** can find the earliest - Since the merged file is sorted, **Binary Search** can find the earliest occurrence.

**Pseudocode:**
```c
int binarySearchByWeight(Product arr[], int n, float target) {
    int low = 0, high = n - 1, result = -1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid].weight == target) {
            result = mid;
            high = mid - 1; // Check for earlier occurrence
        } else if (arr[mid].weight < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return result; // -1 if not found
}
```

### Step 6: Implement Task 4 (Summary Report in O(N))
- Simply count all products in the merged file.

**Pseudocode:**
```c
void generateSummary(const char *filename) {
    int count = 0;
    Product p;
    FILE *file = fopen(filename, "r");
    while (readProduct(file, &p)) count++;
    printf("Total products for delivery: %d\n", count);
    fclose(file);
}
```

---

## 3. Testing Strategy
| Task | Test Case | Expected Output |
|------|-----------|-----------------|
| **Task 1** | Unsorted file | Sorted by weight |
| **Task 2** | 4 sorted files | Single merged file |
| **Task 3** | Search weight=0.5 | First product with weight 0.5 |
| **Task 4** | Merged file | Correct total count |

---

## 4. Deliverables Checklist
✅ **Data Structure Design** (`Product` struct)  
✅ **Test Data** (4 CSV files with >10 products each)  
✅ **Task 1 Code** (Merge Sort implementation)  
✅ **Task 2 Flowchart & Code** (4-way merge)  
✅ **Task 3 Code** (Binary Search)  
✅ **Task 4 Code** (Summary report)  
✅ **Project Report** (Word/PDF with pseudocode, test plan, and code)  

---

## 5. Demo Preparation
1. **Show original test data** (`team1.csv`, `team2.csv`, etc.)  
2. **Display sorted files** (Task 1)  
3. **Show merged file** (Task 2)  
4. **Search for a weight** (Task 3)  
5. **Print summary report** (Task 4)  

---

## 6. Final Notes
- **Deadline:** April 4, 2025 (5 PM)  
- **Late Penalty:** -10% per day  
- **Plagiarism Check:** Turnitin will be used  
- **Grading:** Equal weight for code, report, and demo  

### Next Steps:
1. Implement the C code for all tasks.  
2. Test thoroughly with different datasets.  
3. Write the report with explanations for each algorithm's efficiency.  
4. Prepare for the demo with sample data.  ****