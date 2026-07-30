/*
Título: Simular deshacer

Objetivo:
Diseñar una secuencia de operaciones entendiendo el estado y los retornos.

Situación:
Un editor guarda acciones en orden. Parte con:
const historial = ["crear título", "escribir párrafo"];

Instrucciones:
1. Registra al final las acciones "insertar imagen" y "cambiar color".
2. Deshaz las dos acciones más recientes, una por una.
3. Guarda cada acción deshecha en una variable diferente.
4. Vuelve a registrar solamente la primera acción que fue deshecha.
5. Muestra el historial final, ambas acciones deshechas y su longitud.
6. Antes de ejecutar, anota tu predicción del historial final.

Restricciones:
- Usa únicamente arrays, push(), pop(), length, variables y console.log().
- No escribas un array nuevo para representar el resultado final.
- No uses índices, condicionales, ciclos ni otros métodos.

Pistas:
- “Más reciente” significa el elemento situado al final.
- El orden en que guardas los retornos de pop() importa.
- Distingue “primera retirada” de “primera acción realizada”.

Reflexión:
- ¿En qué orden salen las acciones respecto al orden en que entraron?
    R= El ultimo elemento que entra es el primero en salir
- ¿Qué dato necesitas guardar para poder restaurar una acción?
    R= El ultimo dato que se quito
- ¿Cómo cambiaría el resultado si invirtieras las dos llamadas a push() iniciales?
    R= que el elemento que quedaria al final dentro del array seria insertar imagen
*/

const historial = ["crear título", "escribir párrafo"];

// Continúa debajo sin reemplazar historial.
const insertarImagen = historial.push("insertar imagen");
const cambiarColor = historial.push("cambiar color");
const quitarColor = historial.pop();
const quitarImagen = historial.pop();
const cambiarColor2 = historial.push(quitarColor);

console.log(historial, quitarColor, quitarImagen, historial.length);

