/*
Título: Recuperar el último paquete

Objetivo:
Usar pop() conservando el elemento eliminado.

Instrucciones:
1. Crea un array paquetes con cuatro identificadores de texto.
2. Retira el último paquete con pop().
3. Guarda el retorno en paqueteRetirado.
4. Muestra el array, el paquete retirado y la longitud final.

Restricciones:
- Usa solamente arrays, pop(), length, variables y console.log().
- No consultes el último elemento escribiendo manualmente su índice.

Pistas:
- pop() actúa sobre el final sin recibir un valor.
- Separa en tu mente “qué devuelve” de “qué modifica”.

Reflexión:
- ¿Dónde quedó disponible el dato eliminado?
- ¿Cuánto cambió la longitud?
- ¿Qué ocurriría si paquetes tuviera un solo elemento?
*/

// Escribe tu código debajo de esta línea.
const paquetes = ["1","2","3","4"];
const paqueteRetirado = paquetes.pop();

console.log(paquetes, `Longitud final: ${paquetes.length}`, `Paquete retirado: ${paqueteRetirado}`);   
