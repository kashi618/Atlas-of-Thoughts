---
tags:
  - HTML
  - Tables
  - Forms
  - ComputerScience
---
## What is a Table?
It is used to store and display data

## Creating Tables
- `<table>`  element defines a table
- `<th>` element defines the table headings (names of each column)
- `<tr>` element defines a row
- `<td>` element defines the table data

### Example
```html
<table>
	<tr>
		<th> Name </th>
		<th> Favourite Movie </th>
		<th> Favourite Game </th>
	</tr>
	<tr>
		<th>Emily</th>
		<th>Encanto</th>
		<th>Grips</th?
	</tr>
	<tr>
		<td>Andrew</td>
		<td>Luck</td>
		<td>Florence</td>
	</tr>
	<tr>
		<td>Donal</td>
		<td>Luca</td>
		<td>Stray</td>
	</tr
</table>
```

![[Pasted image 20241129152441.png]]

## Horizontal Headings
```html
<table>
  <tr>
    <th>Firstname</th>
    <td>Jill</td>
    <td>Eve</td>
  </tr>
  <tr>
    <th>Lastname</th>
    <td>Smith</td>
    <td>Jackson</td>
  </tr>
  <tr>
    <th>Age</th>
    <td>94</td>
    <td>50</td>
  </tr>
</table>
```

## Column Span
```html
<table>
  <tr>
    <th colspan="2">Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>43</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>57</td>
  </tr>
</table>
```

![[Pasted image 20241129152735.png]]

## Row Span
```html
<table>
  <tr>
    <th colspan="2">Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td rowspan="2">Jill</td>
    <td>Smith</td>
    <td>43</td>
  </tr>
  <tr>
    <td>Jackson</td>
    <td>57</td>
  </tr>
</table>
```

![[Pasted image 20241129152825.png]]

## Blank Values
Just place a "**&nbsp;**" between the `<td></td>` tags
## Styling Tables
```css
table, th, td {
	border: solid 3px black;
	font-size: 2rem;
	text-align: center;
}
```

# See Also
[[Forms - HTML]]