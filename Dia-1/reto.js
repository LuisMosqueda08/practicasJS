/*
RETO: Andén de carga

Una camioneta representa su zona de carga mediante un array. El final del array
es la puerta: por ahí entran y salen las cajas.

Estado inicial:
const carga = ["caja-A", "caja-B"];

Tu misión:
1. Carga, en este orden, "caja-C", "caja-D" y "caja-E".
2. Descarga las dos cajas que quedaron más cerca de la puerta.
3. Guarda cada caja descargada en una variable distinta.
4. Vuelve a cargar únicamente la primera caja que descargaste.
5. Guarda el valor devuelto por esa última carga.
6. Muestra la carga final, las cajas descargadas, la longitud final y el retorno
   de la última carga.

Restricciones:
- Usa únicamente arrays, length, push(), pop(), variables y console.log().
- No uses ciclos, condicionales, funciones, índices ni otros métodos.
- No reemplaces carga por un array nuevo.
- Predice todos los estados antes de ejecutar.

Pistas:
- Dibuja la carga después de cada paso.
- pop() entrega la caja que acaba de retirar.
- El retorno de push() no es una caja.

Preguntas de reflexión:
- ¿Qué caja sale primero y por qué?
   R= La caja E pq fue la ultima en entrar
- ¿Cuál de los valores guardados es un número?
   R= las cargas
- ¿Qué información perderías al no guardar los retornos?
   R= las cajas que fueron descargadas
- ¿Tu predicción coincide con la ejecución línea por línea?
   R= Si
*/

const carga = ["caja-A", "caja-B"];

// Resuelve el reto debajo de esta línea.
const cajas = carga.push("caja-C", "caja-D", "caja-E");
const descarga1 = carga.pop();
const descarga2 = carga.pop();
const recarga = carga.push(descarga1);

console.log(carga, descarga1, descarga2, carga.length, recarga);