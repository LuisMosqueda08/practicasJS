# Errores comunes — Arrays, `length`, `push()` y `pop()`

## Confundir cantidad con índice

En `const datos = ["a", "b", "c"]`, la longitud es 3, pero el último índice es 2. Los índices comienzan en 0.

Pregunta: si hay un solo elemento, ¿cuáles son su longitud y su índice?

## Escribir `length()`

`length` es una propiedad y se consulta sin paréntesis. Los paréntesis se usan en los métodos vistos: `push()` y `pop()`.

## Creer que `push()` devuelve el array

`push()` modifica el array y devuelve su nueva longitud. Guardar su retorno no crea una copia de la colección.

Pregunta: después de `const x = lista.push("a")`, ¿qué tipos de valores esperas en `x` y en `lista`?

## Creer que `pop()` devuelve la nueva longitud

`pop()` devuelve el elemento retirado. La longitud se puede consultar después con `length`.

## Pasar un valor a `pop()`

`pop()` no elige qué valor borrar: siempre retira el último. Escribir un argumento no cambia esa regla.

## No guardar el retorno de `pop()`

El array sí cambia, pero puede perderse el acceso al elemento retirado si no se guarda y no se usa inmediatamente.

## No considerar el array vacío

Al ejecutar `pop()` sobre `[]`, el resultado es `undefined`; el array sigue vacío. Predice este caso antes de probarlo.

## Pensar que `const` vuelve inmutable al array

`const` impide reasignar la variable a otro valor, pero `push()` y `pop()` todavía pueden modificar el contenido.

## Reemplazar el array para evitar razonar sobre su estado

Crear directamente el resultado final oculta la secuencia de cambios. En estos ejercicios interesa comprender cada transición.

## Mirar solo la consola

Ver un valor impreso no explica si es el array, su longitud o el retorno de un método. Etiqueta mentalmente cada salida y revisa el estado por separado.

## Ejecutar sin predecir

La consola confirma; no sustituye el razonamiento. Antes de ejecutar, anota el array antes, la operación, el retorno y el array después.
