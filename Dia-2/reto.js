/*
RETO: Centro de distribución con dos accesos

Una bodega representa una línea de paquetes mediante un array. Recibe entregas
normales por el final y entregas prioritarias por el inicio. Los repartidores
también retiran paquetes desde ambos accesos.

Estado inicial obligatorio:
const paquetes = ["P-20", "P-30", "P-40"];

Tu misión:
1. Recibe "P-50" como entrega normal al final.
2. Recibe "URG-10" y "URG-11" como entregas prioritarias al inicio en una sola operación.
3. Guarda el retorno de cada operación de ingreso.
4. Despacha el primer paquete y conserva su identificador.
5. Despacha el último paquete y conserva su identificador.
6. Una dirección resultó incorrecta: vuelve a colocar el paquete despachado al final, pero ahora al inicio.
7. Una ruta se canceló: vuelve a colocar el paquete despachado al inicio, pero ahora al final.
8. Muestra el estado final, los dos paquetes despachados y todos los retornos de ingreso.
9. Predice cada estado antes de ejecutar.

Restricciones:
- Usa únicamente push(), pop(), shift(), unshift(), variables y console.log().
- No uses índices, length, ciclos, condicionales ni otros métodos de arrays.
- No reemplaces paquetes por un array nuevo.
- Al reinsertar, usa las variables que conservaron los elementos retirados.
- No escribas casos especiales para producir el resultado esperado.

Pistas:
- Dibuja dos puertas: inicio a la izquierda y final a la derecha.
- Una llamada con dos valores sigue siendo una sola operación.
- Nombra los retornos según lo que significan, no según su tipo.
- Lee con cuidado desde qué extremo salió cada paquete y a cuál debe regresar.

Preguntas de reflexión:
- ¿Qué valores retornados son cantidades y cuáles son identificadores?
- ¿En qué momento cambian más índices?
- ¿Qué información perderías si no conservaras los despachos?
- ¿Por qué el orden de los dos paquetes prioritarios merece atención?
- ¿Podrías justificar cada método usando únicamente “inicio”, “final”, “agregar” y “eliminar”?
*/

const paquetes = ["P-20", "P-30", "P-40"];

// Resuelve el reto debajo de esta línea.
const recibeP50 = paquetes.push("P-50");
const prioritarias = paquetes.unshift("URG-10", "URG-11");
const despachadoPrimerPaquete = paquetes.shift();
const despachadoUltimoPaquete = paquetes.pop();
paquetes.unshift(despachadoUltimoPaquete);
paquetes.push(despachadoPrimerPaquete);

console.log(paquetes);
console.log(despachadoPrimerPaquete);
console.log(despachadoUltimoPaquete);
console.log(recibeP50);
console.log(prioritarias);