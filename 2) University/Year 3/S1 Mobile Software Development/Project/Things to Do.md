## Design Requirements
### Free-time visualisation (Simplified Calendar)
- Displays the user's free time as horizontal bars
- Links to the user's personal calendar, or manual free time setup
- Bar should be easy to read. Showing free time at a glance

### Colour Scheme and UI Layout
- Need to figure out colour scheme
	- Beige and green?
- Need to figure out design aesthetic
	- Boxy? Rounded corners? etc
	- Minimalist?
- Need to find out what buttons and pages we need
	- Bottom nav bar:
		- Add assignment
		- View assignment detail
		- Settings
		- etc
- Can use microsoft whiteboard, to quickly prototype

### Creating Documentation
- Should list out every functional requirement in our app
- Should have clear list of Android sensors we use

### Themes?
- Macros for colours, easy colour change.
- 

## Functional Requirements
### Adding an assignment
- What details do we need to gather
	- Due date, module, etc
- Will we be using milestones?
	- Create milestones during assignment create date?
	- Or another button to add milestones for assignment

### Storing assignment details
- Where will we store it? (As csv in local store? Text file?)
	- Inside of CSV? txt file? markdown file?
	- In local storage or system files (/android/data or /android/AssignMint)
- How will we store it?
	- Using sql?

### Study Requests - Accepting Assignment work date
- Using "git" for its commit, push, pull pipeline.
	- How will we add progress to the assignment?
		- Using X amount of hours?
		- Using X% complete?
- Ability to set working hours
	- These are times that the app will use, to find when you are free and able to work


### Personal Calendar/Free Time import
- Function to import personal calendar into the app
	- How will it be stored?
	- How do we find free time from it?

### User Assignment Alert
- How will we alert the user?
- When should we alert the user?

## Optional Requirements
### Study Mode - Ability to use phone as clock
- When accepting assignment work, tilt phone to activate "Study mode"
	- Similar to iphone red clock, should show current time and time elapsed on project
	- When untilt phone, it stops stopwatch, ending your study sessoin

### Multi-user Support - Allows multi user collaboration on common assignment
- How will we link multiple phones togethor?
- Lots of security issues
- Local wifi/bluetooth connectivity?
	- Users need to be on the same LAN, using the LAN as a hub to send and receive assignment data
	- Where will the files be stored then?

### Cloud Backup - Ability to Backup Assignment Data
- Add option to save files on cloud
	- The main file used is stored locally on phone. However, you can upload the files onto cloud, for backup purposes
- 

	