/*
Título: Pedido urgente

Objetivo:
Agregar y eliminar elementos al inicio de un array.

Estado inicial obligatorio:
const pedidos = ["pedido-102", "pedido-103"];

Instrucciones:
1. Agrega "pedido-urgente" al inicio con unshift().
2. Guarda el retorno en nuevaCantidad.
3. Retira el primer pedido con shift().
4. Guarda el retorno en pedidoProcesado.
5. Muestra el array final y ambos retornos.

Restricciones:
- Usa solamente unshift(), shift(), variables y console.log().
- No reemplaces pedidos por otro array.
- No uses índices ni otros métodos.

Pistas:
- Agregar y eliminar producen tipos de retorno distintos.
- Dibuja el índice 0 después de cada operación.

Reflexión:
- ¿Qué representa nuevaCantidad?
    R= el tamaño nuevo del array
- ¿Qué representa pedidoProcesado?
    R= El elemento que ya fue procesado 
- ¿La longitud final coincide con la inicial? Explica por qué.
    R= si ya que el pedido urgente entro y salio primero
*/

const pedidos = ["pedido-102", "pedido-103"];

// Escribe tu código debajo de esta línea.
const nuevaCantidad = pedidos.unshift("pedido-urgente");
const pedidoProcesado = pedidos.shift();

console.log(pedidos);
console.log(nuevaCantidad);
console.log(pedidoProcesado);