/*
Título: Retirar productos agotados

Objetivo:
Eliminar varios elementos consecutivos y conservar los retirados.

Estado inicial obligatorio:
const inventario = ["teclado", "mouse", "cámara", "micrófono", "monitor"];

Instrucciones:
1. Elimina "cámara" y "micrófono" mediante una sola llamada a splice().
2. Guarda lo que devuelve el método en una variable llamada agotados.
3. Muestra inventario y agotados.
4. Predice ambos arrays antes de ejecutar.

Restricciones:
- No crees manualmente el array de agotados.
- No llames dos veces a splice().
- No uses métodos no estudiados.

Pistas:
- El segundo argumento de splice() es una cantidad, no un índice final.
- Observa por separado retorno y mutación.

Preguntas:
- ¿Qué elemento ocupa después el índice 2?
- ¿Por qué agotados es un array?
*/

const inventario = ["teclado", "mouse", "cámara", "micrófono", "monitor"];

// Escribe tu código debajo de esta línea.
let agotados = inventario.splice(2,2)
console.log(inventario)
console.log(agotados)