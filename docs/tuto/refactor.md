# → Strike One, Strike Two & Strike Out!

:::info
Excelente artículo extraído de los documentos de: [Eugenia Bahit](https://eugeniabahit.com/), Hacker especializada en Programación eXtrema e Ingeniería Inversa de Código sobre GNU/Linux, Apache, MySQL, Python y PHP.- Veremos aquí, la secta práctica sugerida por (XP) “eXtreme Programming”, con mayores detalles y algunos ejemplos...
:::

La refactorización se refiere a un grupo de técnicas de codificación usadas para mejorar código defectuoso escrito por otros programadores “y de vez en cuando” por los propios creadores del código. Se ha de confiar en las pruebas a las que someteremos nuestro código para mantener la confianza de que la refactorización no ha perjudicado algo más y los cambios producidos han sido demasiado pequeños.

>Refactorización, como comentamos anteriormente, es una técnica que consiste en mejorar el código fuente de una aplicación (limpiarlo), sin que dichas modificaciones, afecten el comportamiento externo del sistema.

Existen diferentes tipos de refactorizaciones que pueden ser necesarias implementar al código de nuestra aplicación. Cada tipo, representa una técnica diferente de refactorización. Por ejemplo, eliminar código redundante, requiere de una técnica diferente a dividir los algoritmos de un método para crear métodos derivados.

Sin embargo, hablar de técnicas de refactorización puede resultar confuso, ya que la refactorización en sí misma es una técnica, que ofrece diferentes soluciones a cada tipo de problema. Por lo tanto, es preferible pensar la refactorización como una única técnica que propone diferentes soluciones a cada tipo de problema.

## El Problema

En principio, habría que diferenciar el término _“problema”_ de la palabra _“error”_, para no generar confusiones. El _error_ en sí, es una falla en el código fuente, que impide el correcto comportamiento del sistema. Mientras que el _problema_, puede definirse como _“algo que huele mal en el código fuente”_ pero sin embargo, no impide el correcto funcionamiento de la aplicación.

>[Kent Beck](https://es.wikipedia.org/wiki/Kent_Beck), uno de los principales creadores de eXtreme Programming, es quien introdujo el término “bad smells” (malos olores) para referirse de manera global, a aquellas expresiones y algoritmos poco claros que generan confusión en el código fuente de un sistema, tornándolo más complejo de lo que debería ser.

Los problemas que se pueden presentar en el código fuente de una aplicación, dependen de muchísimos factores, que en gran parte de los casos,
encuentran una relación directa con el paradigma de programación empleado así como en el lenguaje que se utilice.

Si se intentara abarcar todos los problemas posibles, la lista podría tornarse infinita, tediosa y hasta inútil o muy confusa. Es por ello, que solo abarcaremos los problemas más frecuentes, que puedan considerarse generales, independientes al lenguaje pero más cercanos al paradigma de la programación orientada a objetos.

## La Solución

Indefectiblemente, la solución a cada problema será la refactorización y aunque resulte redundante, la solución, dependerá de cada problema. Sin
embargo, como regla general, la solución deberá comenzar por identificar el momento en el cual llevarla a cabo.

## Cuándo y cómo tomar la decisión de refactorizar

>- En el mundo de la refactorización, haciendo una analogía con el béisbol, suele utilizarse la regla de “Tres Strike y ¡Refactoriza!”.
>- En el béisbol, un strike es una anotación negativa para el bateador ofensivo cuando la pelota es lanzada hacia el diamante. Al tercer strike
anotado, termina el turno del bateador.
>- Esto puede describirse análogamente como: “la primera vez que hagas algo, solo hazlo. La segunda vez que hagas algo similar, notarás que estás
duplicando código, pero lo harás de todas formas. La tercera vez que te enfrentes al mismo caso, refactoriza ya”.

Cuando se está programando una aplicación, como hemos visto anteriormente, el proceso de desarrollo se está dividiendo en dos acciones
concretas: **programar** y **refactorizar**. Esto es, a medida que vamos creando nuevos métodos, vamos refactorizando el código para eliminar redundancias y en definitiva, hacer el código más legible y así obtener un mejor rendimiento. Pero no estamos refactorizando constantemente, puesto que éste, tiene un momento y lugar para ser refactorizado.

La refactorización, implica que lo primero que debemos hacer, es cumplir el objetivo (programar aquello que se necesita) y luego refactorizar el código, cada vez que:

- Se agregue un nuevo método.
- Se corrija un error.
- Se haga una revisión de código.

Pero siempre, respetando la regla de “los tres strikes”. Una vez identificado el momento, solo será cuestión de identificar el problema a fin de poder elegir la solución indicada.

## Una solución a cada problema

Como comentamos anteriormente, no haremos una extensa lista de problemas, sino que nos centraremos en problemas generales. Muchas de las
soluciones sugeridas en este capítulo, han sido extraídas de https://sourcemaking.com/refactoring, sitio donde se puede encontrar una completa clasificación de problemas y sus respectivas soluciones. Notará que algunas de las técnicas expuestas en el sitio Web referido, no se mencionan en
este apartado, por considerarlas poco apropiadas. Esto es debido a que algunas prácticas las considero contrarias a las buenas prácticas de la programación orientada a objetos y por lo tanto, contraproducentes. 

Como hemos hecho a lo largo del documento, iremos de lo general a lo particular y de lo particular al detalle...
