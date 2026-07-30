/*
Título: Organizar la ruta del autobús

Objetivo:
Combinar operaciones en ambos extremos del array.

Estado inicial obligatorio:
const paradas = ["Centro", "Museo"];

Instrucciones:
1. Agrega "Terminal Norte" al inicio.
2. Agrega "Terminal Sur" al final.
3. Retira la primera parada y guarda su retorno.
4. Retira la última parada y guarda su retorno.
5. Muestra el array final y las dos paradas retiradas.

Restricciones:
- Usa únicamente push(), pop(), shift(), unshift(), variables y console.log().
- No reemplaces paradas por otro array.
- No uses índices ni otros métodos de arrays.

Pistas:
- Marca visualmente ambos extremos después de cada paso.
- El orden de las operaciones forma parte del problema.

Reflexión:
- ¿Qué método trabajó en cada extremo?
    shift y unshift al inicio y Pop y Push al final
- ¿Qué elementos originales permanecen?
    R= Centro y Museo
- ¿Qué cambiaría si retiraras antes de agregar?
    R= devolveria undefind
*/

const paradas = ["Centro", "Museo"];

// Escribe tu código debajo de esta línea.
const parada1 = paradas.unshift("Terminal del norte");
const parada2 = paradas.push("Terminal del sur");
const retiroParada1 = paradas.shift();
const retiroParada2 = paradas.pop();

console.log(paradas);
console.log(retiroParada1, retiroParada2);
