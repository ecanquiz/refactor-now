# Código duplicado (parte 2)
## Código duplicado en varias clases con la misma herencia

El caso anterior puede darse también, cuando el código se encuentra duplicado en diferentes métodos de clases con la misma herencia:

```php
class B extends A {
    static function method_1() {
        self::$property = strip_tags(self::$property);
        self::$property = htmlentities(self::property);
        return self::methodA() . self::$property;
    }
}

class C extends A {
    static function method_2() {
        self::$property = strip_tags(self::$property);
        self::$property = htmlentities(self::property);
        return self::$property . self::methodB() . self::methodC();
    }
}
```

En estos casos, en los cuáles existen dos o más clases que heredan de la misma clase, se extrae el código duplicado en los métodos de las clases hijas, y con éste, se crea un nuevo método de en la clase madre:

```php
class A {
    static function method_3() {
        self::$property = strip_tags(self::$property);
        self::$property = htmlentities(self::property);
    }
}

class B extends A {
    static function method_1() {
        self::method_3();
        return self::methodA() . self::$property;
    }
}

class C extends A {
    static function method_2() {
        self::method_3();
        return self::$property . self::methodB() . self::methodC();
    }
}
```
