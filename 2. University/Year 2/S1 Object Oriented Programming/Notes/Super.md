---
tags:
  - Object-Oriented-Programming
aliases:
---
## Usage
### super.
**Used to access a parent class's methods and attributes**

When a child class overrides a method or hides a field, `super` can be used to access the parents original version

```java
class Animal {
	String sound = "Animal sound";
	
	void makeSound() {
		System.out.println("Animal noises");
	}
}

class Dog extends Animal {
	String sound = "Bark";
	
	void makeSound() {
		super.makeSound(); // Outputs "Animal Noises"
		
		// Prints out "Bark" from Dog class
		System.out.println("Dogs " + sound);
		
		// Prints out "Animal noises" from parent class
		System.out.println("Whilst animals: " + super.sound);
	}
}
```

### super()
**Used to call the parent class constructor**
When `super()` is used in a child class, it calls the parent class' constructor

```java
class Parent() {
	// Parent constructor
	Parent() {
		System.out.println("Parent constructor");
	}
}

class Child() {
	// Child constructor
	Child() {
		super();
		System.out.println("Child constructor");
	}
}
```

# See Also
[[$ Java - Programming Language]]
