/*
Título: Una persona más en la fila

Objetivo:
Practicar push() y distinguir el array modificado de su valor de retorno.

Instrucciones:
1. Crea un array llamado fila con dos nombres.
2. Agrega un tercer nombre al final con push().
3. Guarda el valor devuelto por push() en nuevaCantidad.
4. Muestra fila y nuevaCantidad por separado.

Restricciones:
- Usa solamente arrays, push(), length, variables y console.log().
- No escribas directamente el tercer nombre dentro del array inicial.

Pistas:
- Observa qué hay dentro de fila después de la operación.
- Pregúntate si push() devuelve el elemento, el array o un número.

Reflexión:
- ¿Qué cambió y qué valor fue devuelto?
    R= Cambio el array ya que se le agrego un nuevo elemento
- ¿Coinciden nuevaCantidad y fila.length? ¿Por qué?
    R= Si, pq los dos retornan la cantidad de elementos en el array
*/

// Escribe tu código debajo de esta línea.
const fila = ["Luis", "Maria"];
const nuevaCantidad = fila.push("Laura");

console.log(fila, nuevaCantidad);