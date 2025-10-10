### Question 1
```batch showlinenumbers
REM checks if specific file exists

@ECHO off

IF EXIST "%1" (
	ECHO File %1 exists
	GOTO END
)
ECHO %1 cannot be found
GOTO END

:END

```

### Question 2
```batch showlinenumbers
REM show HELP command, and append to file

@ECHO off

CLS
HELP>>myHelp.txt

IF EXIST myHelp.txt (
	TYPE myHelp.txt
	GOTO END
)
ECHO myHelp.txt does not exist
GOTO END

:END
```

### Question 3
```batch showlinenumbers
REM show HELP and DIR command, and append to file

@ECHO off

CLS
HELP>>myHelp.txt
DIR>myHelp.txt

IF EXIST myHelp.txt (
	TYPE myHelp.txt
	GOTO END
)
ECHO myHelp.txt does not exist
GOTO END

:END
```

### Question 4
```batch showlinenumbesr
REM password checker

@ECHO off

IF "%1"=="moonshine" (
	ECHO PASSWORD IS CORRECT...STARTING THE APPLICATION
	GOTO END
)
ECHO WRONG PASSWORD...ENDING
GOTO END

:END
```