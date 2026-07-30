/*
Título: Atender a la primera persona

Objetivo:
Practicar shift() y distinguir el elemento retirado del array modificado.

Estado inicial obligatorio:
const fila = ["Elena", "Raúl", "Nora"];

Instrucciones:
1. Retira a la primera persona de fila utilizando shift().
2. Guarda el valor devuelto en una variable llamada personaAtendida.
3. Muestra fila y personaAtendida por separado.
4. Antes de ejecutar, escribe tu predicción.

Restricciones:
- Usa solamente arrays, shift(), variables y console.log().
- No reemplaces fila por otro array.
- No uses índices ni otros métodos de arrays.

Pistas:
- El inicio del array corresponde al índice 0.
- Separa “qué sale” de “cómo queda la fila”.

Reflexión:
- ¿Qué valor devuelve shift()?
    R= Elena
- ¿Qué elemento ocupa ahora el índice 0?
    R= Raul
- ¿Cambió el orden relativo de las personas restantes?
    R= no
*/

const fila = ["Elena", "Raúl", "Nora"];

// Escribe tu código debajo de esta línea.
const personaAtendida = fila.shift();

console.log(fila);
console.log(personaAtendida);