## What is it?
A CLI program that contains many simple games, written fully in C

## Types of Games
1. Rock Paper Scissors
```mermaid
---
title: File Structure
---

flowchart TD
	A[main.c]
	B[menu.c]
	X[game1.c]
	Y[game2.c]
	Z[game3.c]
	
	
	A --> || B
	
	B --> |Enter game1| X
	X --> |Exit| B
	
	B --> |Enter game2| Y
	Y --> |Exit| B
	
	B --> |Enter game3| Z
	Z --> |Exit| B
```