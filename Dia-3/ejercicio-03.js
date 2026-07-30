/*
Título: Insertar una parada

Objetivo:
Insertar elementos en medio de un array sin eliminar ninguno.

Estado inicial obligatorio:
const ruta = ["Casa", "Biblioteca", "Oficina"];

Instrucciones:
1. Inserta "Cafetería" entre "Casa" y "Biblioteca" usando splice().
2. Guarda el valor devuelto en una variable llamada retiradas.
3. Muestra ruta y retiradas.
4. Explica en un comentario por qué el retorno tiene ese contenido.

Restricciones:
- No reemplaces ruta por un array nuevo.
- No uses push(), unshift() ni índices para asignar.
- Utiliza una sola llamada a splice().

Pistas:
- Para insertar sin borrar, la cantidad a eliminar es cero.
- La posición de inicio será el índice final del nuevo elemento.

Preguntas:
- ¿Qué elementos cambian de índice?
- ¿Cambia la longitud? ¿Por qué?
*/

const ruta = ["Casa", "Biblioteca", "Oficina"];

// Escribe tu código debajo de esta línea.
let retiradas = ruta.splice(1,0,"Cafetería")
console.log(retiradas)
console.log(ruta)