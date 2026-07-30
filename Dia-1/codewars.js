/*
Descripción

Crea una función llamada registrarMovimiento que recibe un array llamado pila
y un valor llamado nuevoElemento.

La función debe realizar, en este orden:
1. Agregar nuevoElemento al final de pila.
2. Retirar el elemento que quede al final.
3. Devolver el elemento retirado.

El array recibido debe terminar con la misma cantidad de elementos que tenía al
inicio. Razona qué valor debería retirarse después de agregar el nuevo elemento.

Ejemplos

registrarMovimiento(["A", "B"], "C") devuelve "C"
y el array vuelve a contener ["A", "B"].

registrarMovimiento([], "primero") devuelve "primero"
y el array vuelve a estar vacío.

registrarMovimiento([10], 20) devuelve 20
y el array vuelve a contener [10].

Restricciones

- Usa únicamente push() y pop() para cambiar el array.
- No uses índices, length, ciclos, condicionales ni otros métodos de arrays.
- No crees otro array.
- No escribas casos especiales para los ejemplos.
*/
let pila = ["A", "B"];

function registrarMovimiento(pila, nuevoElemento) {
    pila.push(nuevoElemento)
    return pila.pop(); 
}

console.log(registrarMovimiento(pila, "C"));
console.log(pila);