---
tags:
  - ComputerScience
---
```c
#include <stdint.h>
#include <stm32l031xx.h>

void pinMode(GPIO_TypeDef *Port, uint32_t BitNumber, uint32_t Mode);
void enablePullUp(GPIO_TypeDef *Port,uint32_t BitNumber);
void delay(volatile uint32_t dly);
int main()
{
	uint32_t count = 0;
	RCC->IOPENR |= (1 << 0) + (1 << 1);
	pinMode(GPIOA,0,1); // Make GPIOA bit 0 an output
	pinMode(GPIOA,1,1); // Make GPIOA bit 1 an output
	pinMode(GPIOA,2,1); // Make GPIOA bit 2 an output
	
	pinMode(GPIOB,3,1); // Make GPIOB bit 3 an output
	pinMode(GPIOB,4,0); // Make GPIOB bit 4 an input
	
	
	enablePullUp(GPIOB,4); // Turn on pull-up resistor for bit 4
	while(1)
	{
		GPIOA->ODR = count;
		count++;
		delay(200000);
	}
}
void enablePullUp(GPIO_TypeDef *Port, uint32_t BitNumber)
{
	Port->PUPDR = Port->PUPDR &~(3u << BitNumber*2); // clear pull-up resistor bits
	Port->PUPDR = Port->PUPDR | (1u << BitNumber*2); // set pull-up bit
}
void pinMode(GPIO_TypeDef *Port, uint32_t BitNumber, uint32_t Mode)
{
	/*
	*/
	uint32_t mode_value = Port->MODER;
	Mode = Mode << (2 * BitNumber);
	mode_value = mode_value & ~(3u << (BitNumber * 2));
	mode_value = mode_value | Mode;
	Port->MODER = mode_value;
}
void delay(volatile uint32_t dly)
{
	while(dly--);
	
}


```

GPIOA -> ODR



# See Also