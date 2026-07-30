/*
CODEWARS — Cirugía de segmentos

Completa la función `reorganizarTramos`.

Recibe un array `secuencia` con al menos 8 elementos. Debe devolver un ARRAY NUEVO
con esta reorganización:

- Los dos últimos elementos deben pasar, en el mismo orden, al inicio.
- Los tres elementos que originalmente ocupaban los índices 2, 3 y 4 deben pasar,
  en el mismo orden, al final.
- Todos los demás elementos deben conservar su orden relativo.
- El array recibido debe permanecer exactamente igual.

Ejemplo únicamente de formato:
entrada:  [A, B, C, D, E, F, G, H]
salida:   [G, H, A, B, F, C, D, E]

Restricciones:
- Solo puedes usar variables, `length`, `slice()`, `splice()`, `push()`,
  `pop()`, `shift()` y `unshift()`.
- No uses ciclos, recursión, índices para asignar, spread (`...`) ni otros métodos.
- No escribas una solución especial para el ejemplo.
- No modifiques `secuencia`.
- No agregues una solución fuera de la función.

Antes de programar:
1. Divide la entrada en tramos y dibuja sus límites.
2. Decide qué operaciones ocurrirán sobre una copia.
3. Registra cómo cambia cada índice después de una mutación.

Casos que debes probar por tu cuenta:
- Exactamente 8 elementos.
- Más de 8 elementos.
- Valores repetidos.
- Números, textos y valores mezclados.

No completes la función hasta haber escrito tu estrategia en comentarios.
*/
const caso1 = ["A", "B", "C", "D", "E", "F", "G", "H"];
const caso2 = [1,2,3,4,5,6,7,8,9];
const caso3 = [1,2,3,4,5,6,7,8,9,10];
const caso4 = ["A","A","B","C","C","D","E","F"];
const caso5 = [true,"Hola",25,null,{},[],5,9];
const resultado1 = reorganizarTramos(caso5);

function reorganizarTramos(secuencia) {
    let nuevoArray = secuencia.slice();

    let ultimosDos = nuevoArray.splice(-2);
    let intermedios = nuevoArray.splice(2,3);

    let primero = ultimosDos.shift()
    nuevoArray.unshift(primero)
    let segundo = ultimosDos.shift()
    nuevoArray.splice(1,0,segundo)
    let primerUltimo = intermedios.shift();
    nuevoArray.push(primerUltimo)
    let segundoUltimo = intermedios.shift();
    nuevoArray.push(segundoUltimo)
    let tercerUltimo = intermedios.shift();
    nuevoArray.push(tercerUltimo)

    console.log(nuevoArray)
}
