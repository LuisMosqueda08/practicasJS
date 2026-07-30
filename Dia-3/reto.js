/*
RETO: Preparar y actualizar una ruta de reparto

Una empresa conserva la ruta oficial:

const rutaOficial = [
  "Almacén",
  "Centro",
  "Norte",
  "Aeropuerto",
  "Sur",
  "Almacén"
];

Requisitos:
1. Crea `rutaDelConductor` como una copia completa de rutaOficial. La ruta oficial
   nunca debe modificarse.
2. En rutaDelConductor, inserta "Gasolinera" después de "Centro".
3. Retira "Aeropuerto" porque la entrega fue cancelada y guarda lo retirado en
   `paradasCanceladas`.
4. Reemplaza "Sur" por dos nuevas paradas: "Mercado" y "Sur".
5. Crea `tramoPrioritario` copiando desde "Centro" hasta "Mercado", incluyendo
   ambos extremos, sin modificar rutaDelConductor.
6. Muestra rutaOficial, rutaDelConductor, paradasCanceladas y tramoPrioritario.
7. Antes de programar, dibuja los índices después de cada cambio.

Restricciones:
- Solo puedes utilizar slice() y splice().
- No escribas manualmente los arrays resultantes.
- No modifiques rutaOficial.
- No completes una operación mediante asignación directa a un índice.

Pistas:
- Haz primero la copia completa.
- Recalcula los índices después de cada mutación.
- El segundo límite de slice() no se incluye.
- Reemplazar un elemento por dos aumenta la longitud.

Preguntas de validación:
- ¿Cómo demuestras que rutaOficial permaneció intacta?
- ¿Qué devuelve cada llamada a splice()?
- ¿Por qué una posición calculada antes de insertar podría dejar de servir?
*/

const rutaOficial = [
  "Almacén",
  "Centro",
  "Norte",
  "Aeropuerto",
  "Sur",
  "Almacén"
];

// Escribe tu código debajo de esta línea.
