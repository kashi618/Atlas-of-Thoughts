---
tags:
  - ComputerScience
  - JavaScript
  - Arrays
---
## Creating Arrays
``` js 
const name = ["John", "Mary", "Anne", "Joseph", "Kate"];
```

## push()
Adds one or more elements to the end of an array
``` js
let colousr = ["red","orange","yellow","green"];
console.log(colours);

colours.push("blue","purple");
console.log(colours);
```
```
OUTPUT:
["red","orange","yellow","green"]
["red","orange","yellow","green","blue","purple"]
```

## pop()
Removes the last element from an array
``` js
let fruits = ["red","orange","yellow","green"];
let removedFruit = fruits.pop();

console.log(colours);
console.log(removedColours);
```
```
OUTPUT:
["red","orange","yellow","green"]
["red","orange","yellow"]
```

## indexOf()
Returns the first index that a specified element can be found in an array.
Returns -1 if it is not present.
``` js
let fruits = ['apple', 'orange', 'banana'];
let index = fruits.indexOf('orange');

console.log(index);
```
```
OUTPUT:
1
```

