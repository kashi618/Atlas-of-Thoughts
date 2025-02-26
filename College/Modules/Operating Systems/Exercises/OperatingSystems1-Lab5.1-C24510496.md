## 1)
```
ps

ps -l

ps -aux

uptime

w

top

free
```

## 2)
**Foreground Process**
A foreground process is a process that runs in the terminal

**Background Process**
A background process is a process that runs in the background, allowing the user to run other commands.

**Why Use a Background Process?**
When a user sets a process to background, they can work on using other processes. Essentially, it allows multitasking.

## 3)
**Sleep**
The sleep command makes the terminal wait for n amount time. Anything typed into the terminal will then we activated when the sleep is finished.

## 4)
It can be helpful when you need to specify when to execute a command.

## 5)
**sleep 10**
This runs the sleep ground in the foreground, meaning you will not be able to use the terminal unless the sleep is finished.

**sleep 10 &**
This runs the sleep command in the background, allowing the user to continue to use the terminal.

## 6)
```
sleep 1000

<ctrl + z>

ps -l

bg 1
```

## 7)
```
kill -9 503
```

## 8)
```
top

<ctrl + z>

ps -l
// The "s" value in the s column tells us that it is suspended

jobs
// The "stopped" value tells us that it is suspended

fg %1

q
```

## 9)
```
touch listings.txt
ls -l >> listings.txt
```

## 10)
```
echo Neil >> listings.txt
```

## 11)
```
chmod u-r listings.txt
```

## 12)
Gives error for not having appropriate permission

## 13)
