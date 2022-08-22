# Métodos extensos

No solo una expresión puede ser extensa. Muchas veces, nos encontraremos con métodos con extensos algoritmos que realizan varias acciones:

```php
function renderTemplate($data=array(), $pattern, $template) {
    $iniPattern = "[[INI-PATTERN-{$pattern}]]";
    $endPattern = "[[END-PATTERN-{$pattern}]]";
    $content = file_get_contents($template);
    $posIni = strpos($iniPattern);
    $posEnd = strpos($endPattern);
    $stringLength = $posEnd - $posIni;
    $string = substr($content, $posIni, $stringLength);
    $replacements = '';

    foreach($data as $identifier => $value) {
        $replacements .= str_replace("[{$identifier}]", $value, $string);
    }

    $content = str_replace($string, '[[NEW CONTENT]]', $content);
    $resul = str_replace('[[NEW CONTENT]]', $replacements, $content);

    return $resul;
}
```

Cuando existen métodos tan extensos, probablemente, la solución consista en la combinación de diversas técnicas, que van desde agrupar expresiones en
una misma línea hasta evitar la asignación de variables temporales (como vimos al comienzo) y extraer código llevándolo a diferentes métodos:



```php
function renderTemplate( $data = array() ) {
    self::setPatterns();
    self::setContentTemplate();
    self::getPattern();
    self::replaceData($data);
    return str_replace(
        '[[NEW]]',
        self::$replacements,
        self::setNewPattern()
    );
}

static function setPatterns() {
    self::$iniPattern = "[[INI-PATTERN-{self::$pattern}]]";
    self::$endPattern = "[[END-PATTERN-{self::$pattern}]]";
}

static function setContentTemplate() {
    self::$content = file_get_contents(self::$template);
}

static function getPattern() {
    self::$string = substr(
        self::$content,
        strpos(self::$iniPattern),
        (self::$posEnd - self::$posIni)
    );
}

static function replaceData($data = array()) {
    self::$replacements = '';
    foreach($data as $identifier => $value) {
        self::$replacements .= str_replace(
            "[{$identifier}]",
            $value,
            self::$string
        );
    }
}

static function setNewPattern() {
    return str_replace(self::$string, '[[NEW]]', self::$content);
}
```
