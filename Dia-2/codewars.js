/*
Título: Rotación segura de extremos

Descripción

Crea una función llamada rotarExtremos que recibe un array llamado elementos.

La función debe intercambiar el primer y el último elemento del mismo array,
conservando en el mismo orden todos los elementos intermedios. Debe devolver el
elemento que originalmente estaba al inicio.

Si el array está vacío, la función debe devolver undefined y mantenerlo vacío.
Si contiene un solo elemento, debe conservar exactamente ese elemento y devolverlo.

Ejemplos

const a = ["A", "B", "C", "D"];
rotarExtremos(a) devuelve "A"
y a termina como ["D", "B", "C", "A"].

const b = [7];
rotarExtremos(b) devuelve 7
y b termina como [7].

const c = [];
rotarExtremos(c) devuelve undefined
y c continúa como [].

Restricciones

- Usa únicamente push(), pop(), shift() y unshift() para modificar el array.
- No uses map(), filter(), reduce(), find(), splice(), slice(), sort(), reverse(), concat() ni join().
- No uses índices para leer o escribir elementos.
- No crees otro array.
- No reemplaces el array recibido.
- No escribas casos especiales basados en los valores de los ejemplos.
- La función debe trabajar con textos, números u otros valores.

Pistas

- Necesitas conservar valores antes de retirarlos del array.
- Piensa cuidadosamente qué ocurre con un array de un solo elemento después de la primera extracción.
- El orden de extracción y reinserción determina el resultado.
- Prueba mentalmente longitudes 0, 1, 2 y 4.

Preguntas de reflexión

- ¿Por qué una sola llamada a reverse() no demostraría el razonamiento solicitado?
- ¿Qué invariantes deben cumplirse al final?
- ¿Cuántos elementos debe contener el array antes y después?
- ¿Por qué los elementos intermedios deben conservar su orden?
*/

const caso1 = ["A", "B", "C", "D"];
const resultado1 = rotarExtremos(caso1);

function rotarExtremos(elementos) {
    // Escribe tu solución aquí.
   if(elementos.length === 0){
        return undefined
    }
    if(elementos.length === 1){
        const unicoElemento = elementos.pop();
        elementos.push(unicoElemento);
        return unicoElemento;
    } 
    const primerElemento = elementos.shift();
    const ultimoElemento = elementos.pop();
    elementos.push(primerElemento);
    elementos.unshift(ultimoElemento);
    return primerElemento;
}

