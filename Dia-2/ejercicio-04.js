/*
Título: Auditoría de retornos

Objetivo:
Razonar con precisión qué devuelve cada uno de los cuatro métodos.

Estado inicial obligatorio:
const bandeja = ["informe-B", "informe-C"];

Instrucciones:
1. Agrega "informe-A" al inicio y guarda el retorno en retornoUno.
2. Agrega "informe-D" al final y guarda el retorno en retornoDos.
3. Retira el primer elemento y guarda el retorno en retornoTres.
4. Retira el último elemento y guarda el retorno en retornoCuatro.
5. Antes de ejecutar, completa en papel para cada retorno: valor, tipo y método que lo produjo.
6. Muestra bandeja y los cuatro retornos por separado.

Restricciones:
- Usa únicamente push(), pop(), shift(), unshift(), variables y console.log().
- No uses length para deducir los retornos.
- No reemplaces bandeja ni uses otros métodos.

Pistas:
- Clasifica primero los métodos en “agrega” o “elimina”.
- Después clasifícalos en “inicio” o “final”.
- Los métodos que agregan comparten un tipo de retorno.

Reflexión:
- ¿Cuáles retornos son números?
    R= retorno uno y dos
- ¿Cuáles retornos son elementos del array?
    R= retorno tres y cuatro
- ¿Por qué el estado final no revela por sí solo todos los retornos?
    R= porque estos fueron modificados 
*/

const bandeja = ["informe-B", "informe-C"];

// Escribe tu código debajo de esta línea.
const retornoUno = bandeja.unshift("informe-A");
const retornoDos = bandeja.push("informe-D");
const retornoTres = bandeja.shift();
const retornoCuatro = bandeja.pop();

console.log(bandeja);
console.log(retornoUno);
console.log(retornoDos);
console.log(retornoTres);
console.log(retornoCuatro);