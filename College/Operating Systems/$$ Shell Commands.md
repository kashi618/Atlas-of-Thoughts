---
tags:
  - ComputerScience
  - Shell
  - Linux
---
## ls
Name: List directory contents

Examples:

```
ls  
ls -l  
ls -al  
ls -l ~  
ls -al /home
ls -al /home/username
ls -al /home/usernam/lab02
ls -l ~/lab02  
```

## cd
Name: Change Directory

Examples:

```
cd  
cd ~  
cd ~/lab02  
cd ..
cd ../..
cd /home/username/
cd /home/username/lab02
cd /
```

## pwd
Name: Print Working directory

Examples:

```
pwd
pwd --version 
pwd --help
```
## mkdir
Name: make directory

Examples:

```
mkdir lab02
mkdir lab02/folder1
mkdir ~/folder2
mkdir /home/username/lab02/folder3
mkdir -p ~/lab02/lab02/folder4/folder5/folder6
mkdir --help
```

##whoami 
Name: print effective userid

Examples:

```
whoami
whoami --help
whoami --version
```

## touch

Name: Create new empty file or Change file timestamp of existing file

Examples:

```
touch test1.txt
touch ~lab02/songs.txt
touch /home/username/lab02/music.txt
touch --help
```
## man
Name: Display help on how to use a linux command

Examples:

```
man ls
man mkdir
man echo
man mkdir
man man 
man -k rename
```

## echo
Name: Display a line of text

Examples:

```
echo Hello
echo --help
echo --version
echo -e  "this \nis \na \ntest"
```

## cat

Name: concatenate files and print on the standard output display the contents of a file.

Examples:

```
cat .profile
cat --help
cat -n .profile
```

## rm
Name: remove files or directories

Examples:

```
rm testfile1.txt 
rm -i testfile2.txt
rm -fr testfolder/
rm -v test.txt
rm --help
```


# See Also