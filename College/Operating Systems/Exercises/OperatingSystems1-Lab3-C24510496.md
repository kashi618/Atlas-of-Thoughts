## Question 1
### A) whoami
This command returns back the name of the user
### B) who
This command returns back who is on the system

### C) w
does nothing

## Question 2
### A) pwd
Returns the absolute path of the current working directory name (print working directory)

### B) cd path
Changes the current working directory to a directory called path, if it exists

### C) cd ~
Changes the current working directory to the user's home directory

### D) cd -
Changes the current working directory to the previous working directory, and prints out its absolute path

### E) cd ..
Changes the current working directory to the directory before it

### F) cd ../..
Changes the current working directory to two directories before it

### G) cd
Changes current working directory to the user's home directory

## Question 3
### A) echo hello world
```
echo hello world
hello world
```

### B) echo -e “Hello \bOS1 \nClass \v I love this class”
```
echo -e “Hello \bOS1 \nClass \v I love this class”
“Hello bOS1 nClass v I love this class”
```

### C) date
```
date
Wed Feb 12 01:27:50 PM UTC 2025
```

### D) date "+%Y-%m-%d %T"
```
date "+%Y-%m-%d %T"
2025-02-12 13:28:03
```

### E) hostname
```
hostname
cs-178283201779-default
```

### F) uname
```
uname
Linux
```

### G) uname -a
```
uname -a
Linux cs-178283201779-default 6.1.124+ #1 SMP PREEMPT_DYNAMIC Sun Jan 26 15:14:27 UTC 2025 x86_64 x86_64 x86_64 GNU/Linux
```

### H) uptime
```
uptime
13:29:30 up 29 min, 0 user, load average: 0.00, 0.03, 0.00
```

### I) man ls
Shows the manual page for the command "ls"
### J) man who
Shows the manual page for the command "who"
### K) clear
Clears/cleans the terminal

### L) du -hs ~
```
du -hs ~
21M     /home/nialj618
```
Estimates file space usage for the home folder

### M) du -h ~
Estimates the file space usage for the home folder, but shows the space usage of each file

### N) df -h
Estimates how much disk space is free and can be used

## Question 4
```
touch text.txt

mkdir Lab03

cp -i ~/test.txt ~/Lab03/

cd Lab03
mkdir myDir1 myDir2

cd myDir2

mv ~/Lab03/test.txt ~/Lab03/myDir2

ls -l

mv test.txt happy.txt

cd
touch Listing.txt 

who 1>> Listing.txt

cat Listing.txt

ls 1>> Listing.txt

cat Listing.txt
```

## Question 5
### A)
`cat >> q5.txt`
<ctrl + d>

### B)
`rm -i q5.txt`

### C)
`cat >> courses.txt`
`hiiiiiiiiiii!`
<ctrl + d>

### D)
`cat courses.txt`

### E)
`grep courses.txt`
