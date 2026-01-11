---
tags:
  - Web-Development-2
aliases:
---
## Core
- Needs to be terminated with `;`
- If using PHP on a html file, the extension must be `.php` instead.

## Variables
- Variables must be declared with the `$` symbol prefix
- No datatype needs to be specified
```php showlinenumbers
<?php
  $age = 18;
  $name = "john";
?>
```
## Printing Out Values
- PHP code needs to be places in the PHP tag
```php showlinenumbers {4-6}
<html>
<body>

  <?php
    $age = 18;
    $name = "john";
    
    echo "Hello World";
    echo $name;
    echo "my name is " . $name . "i am " . $age
  
  ?>
  
</body>
</html>
```


# See Also
[[$ Web Development 2]]
