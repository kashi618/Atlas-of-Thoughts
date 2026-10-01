## MOC
[[What and Why's of AI]]
[[Approaches & Views of AI]]
[[Intelligent Systems]]

---

# Prolog Queries 


---
# Using Prolog
Edit and write files using text editor. End with ".pl" or ".pro"

Then pull the file into `swipl {FILE}`

---
# Prolog Predicates

A relationship between objects or a property of an object
Uses terms to evaluate TRUE/FALSE statements based on a set of facts and rules

### Facts - Basic Assertions
```prolog {1,2,3}
man(john).
woman(mary).
parent(john, mary).
```
- John is a man
- Mary is a woman
- John is the parent of Mary

### Rules - Conditional Statements
```prolog
head:-body.
```


```prolog {5,6}
woman(mary).
listens2music(mary).
had_lunch(mary).

listens2music(mary):-happy(mary).
had_lunch(mary):-not_hungry(mary).
```
- If mary is listening to music, she is happy
- if mary had lunch, she is not hungry
---
# Prolog Variables
All terms that consist of:
- Letters, numbers, underscores
- And begins with an uppercase letter OR an underscore

Variables that start with an underscore, is an **anonymous variable**

**Example**
```prolog
cat(fluffy).
cat(lucky).
```

```prolog
?- cat(X).
  X = fluffy;
  X = lucky.
```


## Instantiation
```prolog
woman(mary).
loves(john, beer).
loves(rob, beer).
```

```prolog
?- loves(john, X), woman(X).
  X = mia;
  false.

?- loves(rob, X).
  X = beer
```
- The `,` acts as an `and
- 1) John loves X, where X is a woman. Gives false, A john only loves beer
- 2) Rob loves X. Gives true, as Rob loves beer.

---
# Prolog asserta & assertz
**asserta** - asserts at the start of the KB
**assertz** - asserts at the end of the KB

## Examples
**Before asserta**
```prolog
cat(daisy)
cat(lucky)
```

**After asserta**
```prolog
?- asserta(cat(fluffy)).
```

```prolog {1}
cat(fluffy).
cat(daisy).
cat(lucky).
```

**Before assertz**
```prolog
cat(daisy).
cat(lucky).
```

**After assertz**
```prolog
assertz(cat(fluffy)).
```

```prolog {3}
cat(daisy).
cat(lucky).
cat(fluffy).
```


---
# Prolog retract
Removes a fact or rule from the KB

**Before**
```prolog
cat(daisy).
cat(fluffy).
cat(lucky).
```

**After**
```
retract(cat(fluffy)).
```

```prolog
cat(daisy).
cat(fluffy).
cat(lucky).
```

---
# Prolog listing


---
# Prolog dif


---
# Prolog Knowledge Base


---
# Prolog Syntax
### Atoms
Any term that consists of:
- **Letters**
- **Numbers**
- **Underscores**
- **Starts with lowercase letter**

## Complex terms
Functors have to be atoms
Arguments can be of any prolog term:
- Name of predicate
- Rules
- Facts
- Atoms

Complex terms have the form
```prolog
function(arg1, arg2, ... , argn)
```

## Clauses
A statement of code. NOT a line

```prolog
woman(mary). woman(mia).
listens2music(mary). had_lunch(mia).
```
- In this case, there are 4 clauses

## Arity
The number if arguemnts a complex term has, is called its arity
This is because functions with the same name but with different arity amounts, count as separate predicates


```prolog
woman(mary).
loves(mary, alex).
```
- 1) There is 1 arity
- 2) There is 2 arity

Functors with the same name but different arity, can be denoted using the `/` suffix. Where the number of arity is added after the suffix
```prolog
makes(ann, cake).
makes(ann, cake, mary).
```
- The first one is `makes/2`
- The second one is `makes/3`

---
# Prolog Connectives

| English | Predicate Calculus | Prolog |
| ------- | ------------------ | ------ |
| and     |                    | ,      |
| or      |                    | ;      |
| only if |                    | not    |
- Check lecture slides

## If

## Only-if


---
Add all functions to one note




