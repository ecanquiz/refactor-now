# Variables de uso temporal mal implementadas

>En principio, definiremos a las variables de uso temporal, como aquellas variables que son asignadas en el ámbito local de un método de clase y son
necesarias temporalmente, solo en ese método, sin ser llamadas o requeridas por otros métodos.

Generalmente representan un problema en los siguientes casos:

## Variables de uso temporal que definen una acción concreta

```php
$var = ($a * $b ) / (int)$c;
```
En el ejemplo anterior, vemos una variable de uso temporal, que define una acción concreta: dividir el producto de dos factores. Esto representa un problema, ya que las acciones son responsabilidad de los métodos y no de las variables. En estos casos, la solución, es transferir la responsabilidad de la acción a un método:

```php
$var = divideProduct($a, $b, $c);

function divideProduct($a, $b, $c) {
    return ($a * $b ) / (int)$c;
}
```

Nótese que variables de uso temporal definen un valor directo:

```php
$var = 15;
```

o por el retorno de la llamada a una función:

```php
$var = strlen($variable);
```

no necesitan transferir su responsabilidad a otro método.

## Variables de uso temporal que son requeridas por más de un método

```php
function methodA() {
    $a = 15;
    $b = 100;
    $c = 2;
    $var = self::divideProduct($a, $b, $c);
    // continue...
}

private static function divideProduct($a, $b, $c) {
    return ($a * $b ) / $c;
}
```

En el ejemplo, anterior, las variables temporales $a, $b y $c, son requeridas por dos métodos y se están definiendo como tales en un método, requiriendo ser pasadas como parámetros. Aquí, la solución, será convertir las variables temporales, en propiedades de clase:

```php
function methodA() {
    self::$a = 15;
    self::$b = 100;
    self::$c = 2;
    $var = self::divideProduct();
    // continue...
}

private static function divideProduct() {
    return (self::$a * self::$b ) / self::$c;
}
```

## Variables de uso temporal que reasignan parámetros:

```php
function foo($a) {
    $a = htmlentities($a);
    // continue ...
}
```

En casos como éste, la confusión puede ser grande: un parámetro es un parámetro y una variable temporal, una variable temporal. Es entonces, cuando
variables temporales no deben tener el mismo nombre que los parámetros:

```php
function foo($a) {
    $b = htmlentities($a);
    // continue ...
}
```
