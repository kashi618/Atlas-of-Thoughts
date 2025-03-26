### Question 1
```bat showlinenumbers
@ECHO OFF
REM my first batch file.
ECHO SWDev > mycourses1.log
ECHO OS >> mycourses1.log
ECHO Maths >> mycourses1.log
TYPE mycourses1.log
```
```md showlinenumbers
Makes it so it won't show the commands in the terminal
This is a comment
Writes the word **"SWDEV"** to the file
Writes the word **"OS"** to the file
Writes the word **"Maths"** to the file
Displays the contents of the file in the terminal
```

### Question 2
```bat showlinenumbers
@ECHO OFF

ECHO CONTENTS OF myCourse2.txt

ECHO %1 >  myCourses2.log
ECHO %2 >> myCourses2.log
ECHO %3 >> myCourses2.log

TYPE myCourses2.log
```

### Question 3
