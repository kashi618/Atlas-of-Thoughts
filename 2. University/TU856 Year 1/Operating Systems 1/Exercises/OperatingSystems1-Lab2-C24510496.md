## Exercise 1
```bash
mkdir lab02
mkdir backups
cd backups

touch poetry.txt
```

---

## Exercise 2
**What does command `ls -l ~` do?**
It lists the detailed version of everything in the user's home folder (/home/username)

**What does the command `ls -l ~/.. `do?**
It lists the detailed version of everything in the home folder (/home)

**What does the command `ls -l/../..` do?**
It lists the detailed version of everything in the root folder (/)

---

## Exercise 3
```bash showlinenumbers
man mkdir
man touch
man pwd
man ls

man -k rename

echo hello world

cat ~/README-cloudshell.txt

cd ~
touch testfile1.tzt
mkdir testfolder1
mkdir testfolder2
touch testfolder2/testfile2.txt
mkdir testfolder3
touch testfolder3/testfile3.txt

rm testfile1.txt
rmndir testfolder1
rmdir testfolder2
rm -ir testfolder2
rm -fr testfolder3
```

---

## Exercise 4
**Why is the command `rm -fr` a very dangerous command?**
It forces deletes the files and/or folders, without a prompt

**What does the command `mkdir -p ~/a/b/c/d` do?**
Because it has the `-p` argument, it creates the folders a, b, c, d if they do not exist

**What does the command `echo echo` do?**
It will print out the word "echo" in the shell

---

## Exercise 5
