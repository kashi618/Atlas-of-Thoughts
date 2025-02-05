Makes a variable always print with a specific amount of digits
```c showlinenumbers
printf("%02d",var1)
```


Usefull for 24hour time. If you input 6:20, it will print as 06:20

```c showlinenumbers
int hours = 6;
int minutes = 20; 
printf("The time is %02d:%02dm",hours,minutes)
```