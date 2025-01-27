
``` c
#include <stdio.h>
#include <stdint.h>


int main(){
    printf("%d",sizeof(uint8_t));
    return 0;
}
```
- Some compilers or architectures may have different bytes/sizes for variables
- In microprocessors, int's have a size of 2. Whereas in computers, they are 4.
By using <stdint.h>, we can create an unsigned int of size 8. (uint8_t)