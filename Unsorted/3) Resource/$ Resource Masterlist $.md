## MasterList

```dataview
table
WHERE contains(file.folder, this.file.folder)
WHERE file.name != "$ Resource Masterlist $"
SORT file.name ASC
```
