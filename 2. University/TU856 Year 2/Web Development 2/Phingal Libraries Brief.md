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

## Database Layout
## Database
**UserDetails**

| Username (PK) | Password | FirstName | Surname | AddressLine      | AddressLineOther | City   | Telephone | Mobile    |
| ------------- | -------- | --------- | ------- | ---------------- | ---------------- | ------ | --------- | --------- |
| alanjmckenna  | t1234s   | Alan      | McKenna | 38 Cranley Road  | Fairview         | Dublin | 9998377   | 856625567 |
| joecrotty     | kj7899   | Joesph    | Crotty  | Apt 5 Clyde Road | DonnyBrook       | Dublin | 8887889   | 876654456 |
| tommy100      | 123456   | Tom       | Behan   | 14 Hyde Road     | Dalkey           | Dublin | 9983747   | 876738782 |
- Username is unique
- Password 6 characters total
- Telephone/Mobile 10 digit numeric


**Books**

| ISBN (PK)    | BookTitle                | Author            | Edition | Year | CategoryID (FK) | Reserved |
| ------------ | ------------------------ | ----------------- | ------- | ---- | --------------- | -------- |
| 093-403992   | Computers in Business    | Alicia Oneil      | 3       | 1997 | 003             | N        |
| 23472-8729   | Exploring Peru           | Stephanie Birchie | 4       | 2005 | 005             | N        |
| 237-34823    | Business Strategy        | Joe Peppard       | 2       | 2002 | 002             | N        |
| 23u8-923849  | A Guide to Nutrion       | John Thorpe       | 2       | 1991 | 001             | N        |
| 2983-3494    | Cooking for Children     | Anabelle Sharper  | 1       | 2003 | 007             | N        |
| 82n8-308     | Computers for Idiots     | Susan O'Neill     | 5       | 1998 | 004             | N        |
| 9823-23984   | My Life in Picture       | Kevin Graham      | 8       | 2004 | 001             | N        |
| 9823-2403-0  | DaVinci Code             | Dan Brown         | 1       | 2003 | 008             | N        |
| 98234-029384 | My Ranch in Texes        | George Bush       | 1       | 2005 | 001             | Y        |
| 9823-98345   | How to Cook Italian Food | Jamie Oliver      | 2       | 2005 | 007             | Y        |
| 9823-98487   | Optimising Your Business | Cleo Blair        | 1       | 2001 | 002             | N        |
| 988745-234   | Tara Road                | Maeve Binchy      | 4       | 2002 | 008             | N        |
| 993-004-00   | My Life in Bits          | John Smith        | 1       | 2001 | 001             | N        |
| 9987-0039882 | Shooting History         | Jon Snow          | 1       | 2003 | 001             | N        |
- CatagoryID linked to CategoryId in Catagories table

**Categories**

| CategoryID (PK) | CategoryDescription |
| --------------- | ------------------- |
| 001             | Health              |
| 002             | Business            |
| 003             | Biography           |
| 004             | Technology          |
| 005             | Travel              |
| 006             | Self-Help           |
| 007             | Cookery             |
| 008             | Fiction             |

**ReservedBooks**

| ISBN (FK)    | Username (FK) | ReservedDate |
| ------------ | ------------- | ------------ |
| 98234-029384 | joecrotty     | 11-Oct-2008  |
| 9823-98345   | tommy100      | 10-Oct-2008  |
- ISBN linked in ISBN in Books table
- Username linked to Username in UserDetails table

## Page Layout
```
index.php             -> Login page
register.php             -> Register new accounts 

library.php           -> List of books
serachResult.php         -> Result of books searched
reservedBooks.php`       -> List of reserved books

---------------------------------------------------------

database.php          -> Database details and login
loginForm.php         -> Handles login details
registerForm.php      -> Handles registering details
search.php            -> Returns results of searching for books
```

