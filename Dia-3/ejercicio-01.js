/*
Título: Copiar la sección destacada

Objetivo:
Copiar una parte de un array sin modificar el original.

Estado inicial obligatorio:
const capitulos = ["Inicio", "Variables", "Arrays", "Funciones", "Objetos"];

Instrucciones:
1. Crea una variable llamada seleccion.
2. Asígnale un nuevo array que contenga "Variables", "Arrays" y "Funciones"
   utilizando únicamente slice().
3. Muestra capitulos y seleccion por separado.
4. Antes de ejecutar, escribe tu predicción en un comentario.

Restricciones:
- No escribas manualmente un segundo array.
- No uses métodos distintos de los permitidos.
- El array capitulos debe conservarse intacto.

Pistas:
- El inicio se incluye.
- El límite final no se incluye.

Preguntas:
- ¿Qué índices necesitas?
- ¿Cómo comprobarías que el original no cambió?
*/

const capitulos = ["Inicio", "Variables", "Arrays", "Funciones", "Objetos"];

// Escribe tu código debajo de esta línea.
let seleccion = capitulos.slice(1,4)
console.log(capitulos);
console.log(seleccion);