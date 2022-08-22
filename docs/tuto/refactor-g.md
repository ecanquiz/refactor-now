# Código duplicado (parte 3)
## Código duplicado en varias clases sin la misma herencia

Como era de esperarse, el código también podrá aparecer duplicado en diferentes clases pero que no tienen la misma herencia:

```php
class B {
    function method_1() {
        self::property = strip_tags(self::$property);
        self::property = htmlentities(self::property);
        return self::methodA() . self::$property;
    }    
}

class C {
    function method_2() {
        self::property = strip_tags(self::$property);
        self::property = htmlentities(self::property);
        return self::$property . self::methodB() . self::methodC();
    }
}
```

En estos casos, la solución es extraer el código duplicado, crear una nueva clase y con el código extraído, crear un método para esta nueva clase que podrá ser heredada por las anteriores o simplemente, instanciada.


```php
class A {
    static function method_3($parameter) {
        return htmlentities(strip_tags($parameter));
    }
}

class B {
    function method_1() {
        return self::methodA() . A::method_3(self::$property);
    }
}

class C {
    function method_2() {
        return A::method_3(self::$property)
            . self::methodB()
            . self::methodC();
    }
}
```

>Finalmente nuestro objetivo debería ser contar con una plataforma de desarrollo simple y eficaz, que nos permita reutilizar el código invocado
desde cualquier módulo, evitando tener que repensar problemas típicos (cotidianos) y concentrarnos solo en los problemas nuevos.


