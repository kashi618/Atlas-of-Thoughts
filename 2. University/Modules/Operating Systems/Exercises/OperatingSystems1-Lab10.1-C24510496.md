**Checking if they are equal**
```batch showlinenumber
SET myvar=Hello World

IF "%myvar%"=="Hello World" (
	ECHO message recieved
)
```

**Checking if they are NOT equal**
```batch showlinenumber
SET myvar=Hello Earth

IF NOT "%myvar"=="Hello World" (
	Echo The strings are not the same.
)
```

**Checking if a file exists**
```batch showlinenumber
IF EXIST "martin.txt" ECHO martin.txt exists
IF NOT EXIST "martin.txt" ECHO martin.txt does not exist
```

```batch showlinenumber
IF EXIST "martin.txt" (
	ECHO martin.txt exists
)
IF NOT EXIT "martin.txt" (
	ECHO martin.txt does not exist
)
```

**Jumping to specific lines**
```batch showlinenumber
@ECHO off

IF "%1"=="1" GOTO One
IF "%1"=="2" GOTO Two
ECHO Batch file expects parameter 1 or 2
GOTO End

:One
ECHO The parameter 1 was received
GOTO End

:Two
ECHO The parameter 2 was received
GOTO End

:End
```

### EXAMPLE 1
```batch showlinenumber
REM menu.bat

@ECHO OFF

IF EXIST todaysMenu.bat GOTO MENU
ECHO No menu today
GOTO END

:MENU
CALL todaysMenu
GOTO END

:END
```

```batch showlinenumber
REM todaysMenu.bat

@ECHO OFF

ECHO Mc. Donalds Menu
ECHO Quarter Pounder
ECHO Big Mac
ECHO Happy Meal
```

### EXAMPLE 2
```batch showlinenumber
REM openFile.bat

@ECHO off

IF "%1%"=="notepad" (
	GOTO OPENNOTEPAD
)
ECHO "%1" not found, please check spelling
GOTO END

:openNotepad
CALL notepad

:END
```