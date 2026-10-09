## MOC
[[What and Why's of AI]]
[[Approaches & Views of AI]]
[[Intelligent Systems]]

---

# Prolog Queries and Knowledge Bases
## Query
A question or goal that a user can ask the prolog interpreter to prove, using a stored database of facts and rules. It starts with the prompt symbol
`?- `

## Knowledge Base
Set of sentences in a formal language.
Also known as a database of facts, rules, assertions

---
# Prolog Agents
An agent is anything that uses Prolog to reason, plan, and make decisions based on on a knowledge base of facts and rules.

They can be viewed either at the knowledge level, or the implementation level.

### Knowledge Level
This describes what the agent knows, and what it can do, independent on how it is implemented. Such as through prolog syntax, or execution mechanics.

It perceives its environment using sensors, and maintains a representation of the world in a knowledge base. It then acts on the environment through logic reasonings based on the knowledge base.

### Implementation Level
This is how the knowledge is stored and ran in the KB.

## Declarative Approach

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
# Prolog Operators
`:=`
`=:=`
`\=`
`=`




---
# Rational Agents
A rational agent is an agent that takes the "right" action. It is evaluated using the PEAS performance measure

## PEAS Measure
- Performance measure
- Environment
- Actuators
- Sensors

**Example - Interactive English Tutor System**
- Performance measure - student score on test
- Environment - set of students tests
- Actuators - display exercises, corrections, feedback
- Sensors - keyboar input


---
# Logic
A formal language for expressing knowledge, and ways of reasoning
- Syntax
- Semantics
- Inference method

---
# Propositional Logic

## Syntax

## Semantics

## Inference Method

---
# Wumpus World PEAS Example

## PEAS
{Week 3 - slide 7-8}

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

---
# Resolution Algorithm

## Proof by Contradiction Using Resolution


