/*
Título: Reubicar pasajeros

Objetivo:
Resolver un problema de lógica conservando valores retirados y reutilizándolos.

Estado inicial obligatorio:
const transporte = ["Ana", "Bruno", "Carla", "Diego"];

Situación:
El primer y el último pasajero deben cambiar de extremo sin alterar el orden de
Bruno y Carla.

Instrucciones:
1. Retira el primer pasajero y conserva el valor.
2. Retira el último pasajero y conserva el valor.
3. Coloca al pasajero que estaba al final en el inicio.
4. Coloca al pasajero que estaba al inicio en el final.
5. Muestra el estado final y los dos valores retirados.
6. Anota todos los estados intermedios antes de ejecutar.

Restricciones:
- Usa únicamente push(), pop(), shift(), unshift(), variables y console.log().
- No escribas nombres directamente al volver a insertarlos: reutiliza los retornos.
- No uses índices, ciclos, condicionales ni otros métodos.
- No reemplaces transporte por otro array.

Pistas:
- Primero conserva aquello que desaparecerá del array.
- El método de extracción y el método de reinserción no tienen que actuar en el mismo extremo.
- Comprueba que los pasajeros centrales mantengan su orden relativo.

Reflexión:
- ¿Por qué necesitas guardar ambos retornos?
- ¿Qué error ocurriría si insertaras un nombre literal?
- ¿Qué secuencia mínima de cuatro operaciones cumple el objetivo?
*/

const transporte = ["Ana", "Bruno", "Carla", "Diego"];

// Escribe tu código debajo de esta línea.
const retiroPrimerPasajero = transporte.shift();
const retiroUltimoPasajero = transporte.pop();
transporte.unshift(retiroUltimoPasajero);
transporte.push(retiroPrimerPasajero);

console.log(transporte);
console.log(retiroPrimerPasajero);
console.log(retiroUltimoPasajero);