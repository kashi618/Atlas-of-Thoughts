### Format of the IF command
**Checking if they are equal**
```batch
SET myvar=Hello World

IF "%myvar%"=="Hello World" (
	ECHO message recieved
)
```

**Checking if they are NOT equal**
```batch
SET myvar=Hellow Earth

IF NOT "%myvar"=="Hello World" (
	Echo The strings are not the same.
)
```

**Checking if a file exists**
```batch
IF EXIST "martin.txt" ECHO martin.txt exists
IF NOT EXIST "martin.txt" ECHO martin.txt does not exist
```

```batch
IF EXIST "martin.txt" (
	ECHO martin.txt exists
)
IF NOT EXIT "martin.txt" (
	ECHO martin.txt does not exist
)
```

**Jumping to specific lines**
```batch
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

**Calling batch files within a batch file**
```batch
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

```batch
REM todaysMenu.bat

@ECHO OFF

ECHO TODAY'S MENU
ECHO Steak and Chips
ECHO Stir Fried Veg
ECHO Seafood Pasta
ECHO Pizza
```

