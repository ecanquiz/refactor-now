# Código duplicado (parte 1)

## Código duplicado en una misma clase

Es frecuente -y de lo más común-, que las mismas expresiones, comiencen a duplicarse en diferentes métodos de una misma clase:

```php
static function method_1() {
    self::$property = strip_tags(self::$property);
    self::$property = htmlentities(self::property);
    return self::methodA() . self::$property;
}

static function method_2() {
    self::$property = strip_tags(self::$property);
    self::$property = htmlentities(self::property);
    return self::$property . self::methodB() . self::methodC();
}
```
Las expresiones duplicadas en el código de los diferentes métodos de una misma clase, se solucionan extrayendo el código duplicado de los métodos, y
colocándolo en un nuevo método de clase:

```php
static function method_1() {
    self::method_3();
    return self::methodX() . self::$property;
}

static function method_2() {
    self::method_3();
    return self::$property . self::metodoY() . self::metodoZ();
}

static function method_3() {
    self::$property = strip_tags(self::$property);
    self::$property = htmlentities(self::property);
}
```
