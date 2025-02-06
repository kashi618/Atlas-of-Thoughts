---
tags:
  - ComputerScience
---
```c showlinenumbers
pinMode(GPIOA,0,1);

turnOn() {
	GPIOA->ODR = (1<<0);
	
}
```

# See Also