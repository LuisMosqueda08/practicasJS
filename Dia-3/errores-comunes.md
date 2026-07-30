# Errores comunes: `slice()` y `splice()`

## Confundir los nombres

`slice()` copia un rango; `splice()` modifica el array. Antes de escribir el método, formula la intención: “quiero conservar” o “quiero editar”.

## Pensar que `slice()` modifica el array

El cambio no aparece en el original porque `slice()` devuelve otro array. Si ignoras el retorno, pierdes la copia creada.

```js
const parte = datos.slice(1, 3);
```

Aquí debes inspeccionar tanto `datos` como `parte`.

## Olvidar que `splice()` devuelve lo eliminado

El retorno no es el array modificado. Incluso al eliminar un único elemento, devuelve un array. Si solo inserta, devuelve `[]`.

## Confundir los parámetros

```text
slice(inicio, finExcluido)
splice(inicio, cantidadAEliminar, elementosNuevos...)
```

En `slice(2, 4)`, el `4` es una posición límite. En `splice(2, 4)`, el `4` es una cantidad.

## Incluir accidentalmente el límite final

`slice()` no incluye `fin`. Para copiar índices 1, 2 y 3, el límite final debe quedar después del índice 3.

## Reemplazar cuando solo se quería insertar

Una inserción con `splice()` usa cantidad cero. Una cantidad positiva elimina elementos antes de insertar los nuevos.

## No recalcular índices

Después de insertar o eliminar, los elementos posteriores pueden ocupar posiciones nuevas. Un índice anotado antes de una mutación puede quedar obsoleto.

## Creer que `const` vuelve inmutable el array

`const` evita reasignar la variable, pero métodos como `splice()`, `push()` y `shift()` aún pueden cambiar el contenido.

## Confundir copia superficial con copia profunda

`slice()` crea un array exterior nuevo, pero objetos o arrays interiores siguen siendo referencias compartidas.

## Mutar accidentalmente una fuente que debía conservarse

Antes de editar, identifica cuál colección es la fuente y cuál puede cambiar. Cuando el requisito exige conservar la fuente, trabaja sobre una copia.

## Comprobar solo el resultado visible

Una prueba completa registra:

```text
estado anterior -> argumentos -> retorno -> estado posterior
```

Dos programas pueden mostrar el mismo resultado final y, aun así, uno haber destruido datos que debían conservarse.
