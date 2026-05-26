
## Question 1
### A)
Unit testing focusing on testing the smallest possible tests in an application, in isolation, such as methods, functions, classes, etc. This is white-box testing, and is tested by the software developers.

Integration testing is testing if the interactions between modules and units cooperate correctly. This is a hybrid approach to testing, as both developers and QA testers use this testing.

Functional testing is testing the whole application itself, to verify it meets the requirements of the software. This is a black-box testing approach, as it is primarily handled by quality assurance engineers, and possible end users.

### B)se
The iterator pattern is a design pattern that allows you to access elements of a collection sequentially, without needing to expose its internal logic/structure.
**!!!!!**


## Question 2
This is called a singleton pattern, where access is controlled using only a single instance.
```java
public class BookingSystem {
	// Private static variable to hold the singular instance
	private static BookingSystem instance;
	private Date date;
	
	// private constructor, to prevent multiple instances
	private BookingSystem() {
	
	}
	
	// Public method to allow access to the booking system
	public static BookingSystem getInstance() {
		if (instance == null) {
			instance = new BookingSystem();
		}
		return instance;
	}
	
	
	// Methods
	public void makeReservation() { // Handles reservations
	
	}
**!!!!!**	
	public void recordArrival() { // Records arrivals
	
	}
	
	public void assignTable() { // Assigns tables, called by makeReservation()
	
	}
	
}

```

### B)
The observer pattern is used to

## Question 3
### A)
In Notebook

### B)

**!!!!!**
### C)
```
context Table**!!!!!**
inv NoOverlappingBookings:
	self.bookings->forAll(b1, b2 | 
		(b1 <> b2 and b1.date = b2.date) implies (b1.time <> b2.time)
	)
```

```
context BookingSystem
inv BookingIsActive:
	self.selected->notEmpty() implies self.current->includes(self.selected)
```

## Question 4
### A)
A design by contract is a method where classes define their behaviour and interactions through contracts, containing pre/post conditions and class invariants

When introducing subclassing/polymorphism:
preconditions can never strengthen
postconditions can never weaken
A subclass inherits all invariants of its superclass

### B)
Client code must satisfy all preconditions before calling an operation. This ensures that all postconditions will be satisfied when the method returns

For providers, they must ensure that all postconditions and class invariants are fully met, if the preconditions are valid. This makes it so that all preconditions can be assumed true, removing defensive checks through the logic.

For exceptions, they can only be used for external faults such as I/O issues.

### C


## Question 5
### A)
1. Test driven development
   Developers create automated unit testing to ensure that a developed feature works properly
2. Pair programming
   Two developers share a single development workspace, where they work togethor to write code and evaluate logic
3. Continuous integration
   Engineering teams merge new code updates consistently, so that automated tests can detect bugs early
4. Refactoring
   Code is continuously refactored, to keep it maintainable and readable over time
5. Small Releases
   Functioning software releases are released quickly, to minimize deployment risks 
6. Simple Design
   Developers should take a "Keep it simple stupid" approach to software design. They should ask themselves if there is a easier/better solution for the function they are implementing


### B)
In the pre-internet era, software design featured very few updates/refactors, but increased amount of planning. This is because software distribution relied on physical mediums such as CDs. This meant that fixing bugs/defects was very slow and tedious. Developers had to take more time designing and finding potential bugs, before releasing the application.

In the modern software era, software design focuses less on anticipatory designing, usually releasing applications and then fixing them with updates. They shifted towards continuous refactoring, as updating is easier and quicker. 



