## Requirements
**"The aim of this assignment is to develop a book reservation website using PHP and MySql database. This application will allow users to search for and reserve books. Specifically, the application will enable the following"**

### Library Functionality
1. User can search for a book
	- Search by title and/or author (include partial search)
		- Results of the search should be displayed as a list
	- Search by book category using dropdown menu/filter
	- Using the results gathered from dropdown menu or search, display details about the book (reservation status, title, author, category etc) 	
2. User can reserve a book
	- Using the results gathered from searching a book, display details about the book (reservation status, title, author, category etc) 
3. User can view all the books they have reserved
	- List of reserved books. User should be allowed to remove the reservation as well

NOTE: Show maximum 5 results at once

### User Login and Registration
User must identify themselves to the system, to access it. If the user has not previously used the system, they must register.
The details must be as follows:
1. Unique and distinct username
2. Alphanumeric 6 character password.
	- With a password confirmation/check function
3. Numeric only phone number, 10 digits in length

## Database
userDetails

| username     | Password | FirstName | Surname | AddressLine      | AddressLine | City   | Telephone | Mobile    |
| ------------ | -------- | --------- | ------- | ---------------- | ----------- | ------ | --------- | --------- |
| alanjmckenna | t1234s   | Alan      | McKenna | 38 Cranley Road  | Fairview    | Dublin | 9998377   | 856625567 |
| joecrotty    | kj7899   | Joesph    | Crotty  | Apt 5 Clyde Road | DonnyBrook  | Dublin |           |           |
| tommy100     | 123456   | Tom       | Behan   | 14 Hyde Road     | Dalkey      | Dublin |           |           |

books

| ISBN        | bookTitle             | author          | edition | year | category | reserved |
| ----------- | --------------------- | --------------- | ------- | ---- | -------- | -------- |
| 093-403992  | Computers in Business | Alicia Oneil    | 3       | 1997 | 003      | N        |
| 23472-8729  | Exploring Peru        | Stephanie Birth |         |      |          | N        |
| 237-34823   |                       |                 |         |      |          |          |
| 23u8-923849 |                       |                 |         |      |          |          |
| 2983-3494   |                       |                 |         |      |          |          |
| 82n8-308    |                       |                 |         |      |          |          |
| 9823-       |                       |                 |         |      |          |          |

categories

reserved books

