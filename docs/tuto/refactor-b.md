# Métodos que reciben parámetros

Aquí debe hacerse una notable distinción entre parámetros, variables de uso temporal y propiedades de clase. Y esta distinción, está dada por la finalidad de cada una:

- Las **variables de uso temporal** , como hemos visto antes, están destinadas a definir un valor concreto al cual se hará referencia solo en el ámbito donde se haya definido.
- Las **propiedades de clase**, son características inherentes al objeto a las cuales se hará referencia desde diversos ámbitos.
- Y finalmente, **los parámetros**, serán valores adicionales, que no pueden ser considerados propiedades del objeto pero que sin embargo, son requeridos para que una acción, modifique las propiedades de un objeto.

```php
class User {
    function validateUser($username, $pass) {
        if($username == 'pepe' && $pass == '123') {
            return true;
        }
    }
}
```

En el ejemplo anterior, claramente los parámetros `$username` y `$pass`, deberían ser propiedades del objeto `User` puesto que son características
intrínsecas al objeto. Como regla general, los parámetros deben ser evitados toda vez que sea posible, reemplazándolos por propiedades de clase:

```php
class User {
    function validateUser() {
        if($this->username == 'pepe' && $this->pass == '123') {
            return true;
        }
    }
}
