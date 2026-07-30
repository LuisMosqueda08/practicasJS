# Errores comunes — `shift()` y `unshift()`

## Confundir qué devuelve `shift()`

`shift()` devuelve el primer elemento eliminado, no la nueva longitud. El array y el retorno deben observarse por separado.

Pregunta: si el primer elemento es `"A"`, ¿qué valor esperas guardar y cómo queda el array?

## Pensar que `unshift()` devuelve el array

`unshift()` modifica el array y devuelve su nueva longitud. Guardar el retorno no crea una copia.

Pregunta: después de `const x = lista.unshift("A")`, ¿qué tipo de valor contienen `x` y `lista`?

## Confundir inicio con final

`shift()` y `unshift()` trabajan en el inicio. `pop()` y `push()` trabajan en el final. Dibuja el array horizontalmente y marca ambos extremos.

## No comprender que los índices cambian

Después de `shift()`, el antiguo índice 1 pasa a ser 0. Después de `unshift()`, el antiguo índice 0 pasa a ser 1. Guardar mentalmente índices anteriores produce errores.

## Confundir mutación con retorno

Una operación puede cambiar el array y, además, producir un valor. El retorno no es una descripción completa del cambio.

## Creer que `const` hace inmutable el array

`const` impide reasignar la variable, pero los cuatro métodos estudiados todavía pueden modificar su contenido.

## Ignorar el array vacío

`shift()` y `pop()` sobre `[]` devuelven `undefined`. Eso no significa necesariamente que ocurrió un error; significa que no había un elemento que retirar.

## Confundir `undefined` almacenado con ausencia de elemento

Un array podría contener explícitamente `undefined`. El retorno por sí solo no siempre demuestra si el array estaba vacío; el contexto y el estado importan.

## Agregar varios valores sin predecir su orden

`unshift(a, b)` coloca ambos valores al inicio respetando el orden indicado. Predice el array completo antes de ejecutar.

## Usar `shift(valor)` para elegir qué borrar

`shift()` no necesita un argumento y siempre retira el primer elemento. No busca un valor específico.

## Olvidar guardar un elemento que debe reutilizarse

Si después necesitas reinsertar lo retirado, conserva el retorno de `shift()` o `pop()` en una variable con nombre claro.

## Suponer que todos los métodos devuelven lo mismo

Los métodos que agregan devuelven longitud; los que eliminan devuelven elementos. Clasificarlos por acción ayuda más que memorizar cuatro reglas aisladas.

## Elegir por rendimiento sin pensar en el problema

Aunque `shift()` y `unshift()` suelen costar O(n), pueden expresar correctamente una fila o una prioridad. La eficiencia se evalúa junto con claridad, tamaño y frecuencia de uso.

## Ejecutar sin registrar estados intermedios

Un estado final correcto puede ocultar un razonamiento incorrecto. Anota operación, retorno y estado después de cada línea.
