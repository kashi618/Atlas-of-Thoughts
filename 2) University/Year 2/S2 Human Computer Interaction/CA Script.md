## Introduction
Hi, I'm Neil Jiang, and this is my video showcasing my Lab 10 submission for the module GenAI Assisted Programming.

I'll begin by demonstrating that my program passes the unit-test that was given. Then, I will give a quick run through of the program manually, showing that it works as per the breif.



## Issues/Problems
### Problem 1
**Inconsistencies with UX**
Moving into the code, the first issue I identified and fixed, regards the issue of "inconsistencies in the user experience"

This can be seen in my "view_bus_runs()" function. On the left, I have my old version, whilst on the right, i have the new and improved version.
This function essentially displays a timetable of available buses that are currently running. The data is taken through SQL queries which are executed in the database, which returns a tuple of the the resulting rows

In this function, we first connect to the database. Then, we execute an sql function which inner joins the run and service table. Then, I used fetchall() function, which returns the results as a list of tuples, where each tuple is a row from the database

in my first draft, i simple iterated through each of the fetchall() tuples, and printing them out raw. However, when reveiwing the command line output, i found a significant UX problem. The database storesall data such as route names and dates as variable length strings. This means that some strings are very long, whilst some are very short. This results in a table which looks unstructured, due to its misalignment

Now, onto the improved version. Instead of printing out the data raw, i used a fixed width tabulatur layout.

First, I created a header, using python's f-string format specifiers. by using syntax such as this {:<15} I tell pythong to left align the header, and automatically add padding so that it will always print ouit exactly 15 characters. This padding is also added when displaying out each piece of data from the rows

Secondly, I sorted sorted the rows by its date and route name. Then, i used an enumeration to to provide a sequential number for each route. This makes it easier to pick which route, because if i used the BUS ID, the numbers would be all out of place due to the sorting

I will show the result now
As you can see, the table is now aligned properly. By adding the header and clear separators, it allows the user to quickly look for a specific date or route. This method for displaying data is more user friendly, and easy to read.

### Problem 2
**Algorithm Soundness**
The second major problem i found was the lack of exception handling, which impacted the algorithm soundess of the program. This can be seen in the buy_ticket() function

This function first shows the user the current routes available, promptiong them about which route, and the quantiy of tickets they need to buy

Just like before, the old version is on the left, and the improved version is on the right. Also, for the sake of time and the scope of the problem, I will not be going through the entire function. Instead, I will only be going through what is neccesary. That is lines 1-28 for the old version, and lines 240-281 in the new version

My first version uses a direct integer cast, turning the user input into an integer, allowing it to be used to find the run id and the quantity of tickets needed. However, a major problem comes if the user either mistakenly enters a non integer value such as a letter, or an invalid integer value such as a number with a decimal. There is no safeguard for the input, which means that the program will crash.

In my improved version, i implemented two layers of protection. First, i used a try-except block, to catch non numeric inputs. This allows the program to fail gracefully, returning the user back to the main menu isntead of crashing.
Second, i added a boundary check for the route selection, so that if the user picked a number higher than what is available, it would throw up a warning message to the user. It basically checks if the selection actually exists in the available runs,

By adding these safeguards, it improves the algorithm soundness of this program. It allows for inperfect/user error when they are entering values, preventing hard crashes. 

## Quality
### Quality 1
Now that we have covered the problems I have identified and fixed, I want to highlight two areas of high code quality that I implemented at the very beginning


The first area of good quality code is my approch to avoid hard coding constants. In the main script, you can see that I defined DB_NAME, short for database name as a global constant. I defined this for each pythongfile which references the database

This means that everytime a function needs to connect toe the database, I only need to write DB_name, instead of manually typing out the database name. 

This is evidence of high qualtiy code, for two reasons.

First, it maintains the DRY principle, which means "dont repeat yourself". By using a constant, i eliminate the need to repeat the same string all over the database. I also eliminate the risk of bugs caused by typos in the name

Second, it improves the future maintainability and testing of the program,. Although the brief explicitly doesn't ask for it, if I ever need to create a "test database" of a different name, i simply need to change this constant. It creates a single source of truth, instead of needing you to find and manually change every instance where the databse is referencesd

### Quality 2
The second area where high code quality was evident from the beginning, is my approach to algorithm soundness by using paramaterized queries.

Throughout the codebase, it is often needed to inject user inputted values into the SQL query. This is evident in many functions, but we will focus on the view_bought_tickets function.

In this function, it queries the database using the username of the currently logged in user, to find tickets that are bought by the user. Whilse it might be easy to just pass the user_id straight into the sql query, this opens up a major security breach. Instead, i used the SQL placeholder, using a question mark in palce of the ID, and passing the actual userid as a separate parameter in the execute function. What this does is, sanitize the userid before it is passed into the query.
If i did not do this, and instead, passed the userid in itself, it becomes vulnerable against SQL injection attacks. User's would be able to write malicious SQL code, hide it as their user id

## Outro
Thank you for watching
