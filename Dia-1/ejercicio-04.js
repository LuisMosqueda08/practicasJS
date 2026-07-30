/*
Título: Predice la mochila

Objetivo:
Seguir varios cambios de estado y comprobar cada retorno.

Estado inicial obligatorio:
const mochila = ["agua", "mapa"];

Instrucciones:
1. Antes de programar, escribe en papel cómo queda mochila tras cada paso.
2. Agrega "linterna" y conserva el retorno de push().
3. Agrega "brújula" y conserva el retorno de push().
4. Retira el último elemento y conserva el retorno de pop().
5. Muestra el estado final y los tres valores retornados.

Restricciones:
- Usa solamente push(), pop(), length, variables y console.log().
- Ejecuta las operaciones en el orden indicado.
- No reemplaces mochila por otro array.

Pistas:
- Dibuja casillas después de cada operación.
- Dos llamadas consecutivas pueden producir retornos distintos.

Reflexión:
- ¿Cuál retorno representa una cantidad y cuál representa un elemento?
    R= El retorno de push es una cantidad, y el de pop un elemento
- ¿La brújula continúa en la mochila al final?
    R= No
- ¿Qué evidencia de cada cambio conserva el programa?
    R= las variables donde se guardan los cambios
*/

const mochila = ["agua", "mapa"];

// Continúa debajo sin borrar el estado inicial.
const agregarLinterna = mochila.push("linterna");
const agregarBrujula = mochila.push("brujula");
const retirarUltimo = mochila.pop();

console.log(mochila, agregarLinterna, agregarBrujula, retirarUltimo);
