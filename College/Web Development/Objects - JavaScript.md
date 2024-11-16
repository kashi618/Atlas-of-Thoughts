---
tags:
  - ComputerScience
  - JavaScript
---
Similar to variables, but allows storing of more complex data, which are organised using key-value pairs.
``` js
let customer = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345"
    },
    
    orders: [
        { id: 101, product: "Laptop", price: 999.99 },,
        { id: 102, product: "Smartphone", price: 499.99 },
    ]
    
};
```
