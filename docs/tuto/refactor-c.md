# Expresiones extensas

Muchas veces, podremos encontrarnos con expresiones que debido a su extensión, se hacen difíciles de leer y cuando no, confusas:

```php
return ((in_array('abc', $array) || in_array('bcd', $array)) &&
(in_array('cde', $array) || in_array('def', $array))) ? 'OK' : 'ERROR';
```

Cuando estamos en presencia de expresiones tan extensas, lo mejor es -aquí sí- utilizar variables de uso temporal para simplificar dichas expresiones:

```php
$a = in_array('abc', $array);
$b = in_array('bcd', $array);
$c = in_array('cde', $array);
$d = in_array('def', $array);

return (($a || $b) && ($c || $d)) ? 'OK' : 'ERROR';
```
