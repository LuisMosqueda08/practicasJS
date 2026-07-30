/*
Título: Primer inventario

Objetivo:
Crear un array con tres objetos cotidianos y consultar su cantidad.

Instrucciones:
1. Declara un array llamado objetos con tres textos.
2. Declara una variable llamada cantidad que obtenga la longitud del array.
3. Muestra objetos y cantidad por separado.

Restricciones:
- Usa solamente arrays, length, variables y console.log().
- No agregues ni elimines elementos.

Pistas:
- Un array se crea entre corchetes.
- length es una propiedad: ¿necesita paréntesis?

Reflexión:
- ¿En qué se diferencian la cantidad de elementos y el último índice?
  R= que la cantidad de elementos siempre 1 mas que el ultimo indice
- ¿Cambió el array al consultar su longitud?
  R= No
*/

// Escribe tu código debajo de esta línea.
const objetosCotidianos = ["Celular","Cartera","Audifonos"];
const cantidad = objetosCotidianos.length;

console.log(objetosCotidianos, cantidad);