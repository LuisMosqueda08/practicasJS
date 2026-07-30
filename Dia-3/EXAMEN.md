# Examen — Día 3: `slice()` y `splice()`

No ejecutes los fragmentos hasta escribir tus predicciones. No se incluyen respuestas.

## 10 preguntas de opción múltiple

1. ¿Qué devuelve `["a", "b", "c"].slice(1, 3)`?
   - A) Un elemento
   - B) Un array nuevo
   - C) La nueva longitud
   - D) El array original modificado

2. ¿Cuál método modifica el array original?
   - A) Solo `slice()`
   - B) Solo `splice()`
   - C) Ambos
   - D) Ninguno

3. En `slice(2, 5)`, ¿qué representa `5`?
   - A) La cantidad a copiar
   - B) El último índice incluido
   - C) El límite final excluido
   - D) La nueva longitud

4. En `splice(2, 3)`, ¿qué representa `3`?
   - A) Un índice final
   - B) La cantidad a eliminar
   - C) La cantidad a insertar
   - D) El valor que se busca

5. ¿Qué devuelve `splice()` cuando inserta sin eliminar?
   - A) El elemento insertado
   - B) La nueva longitud
   - C) Un array vacío
   - D) `undefined`

6. ¿Cuál llamada copia un array completo?
   - A) `datos.splice()`
   - B) `datos.slice()`
   - C) `datos.push()`
   - D) `datos.shift()`

7. ¿Qué describe mejor una copia superficial?
   - A) El array exterior y todos los objetos interiores son nuevos
   - B) No se crea ningún array nuevo
   - C) El array exterior es nuevo, pero puede compartir referencias interiores
   - D) Solo se copian textos

8. ¿Cuál operación inserta `"X"` en el índice 2 sin eliminar?
   - A) `datos.slice(2, 0, "X")`
   - B) `datos.splice(2, 0, "X")`
   - C) `datos.splice(0, 2, "X")`
   - D) `datos.slice(0, 2, "X")`

9. ¿Por qué las referencias nuevas resultan útiles en React?
   - A) Porque eliminan todos los errores
   - B) Porque facilitan detectar y razonar sobre cambios de estado
   - C) Porque convierten arrays en textos
   - D) Porque hacen profunda cualquier copia

10. Si se eliminan tres elementos y se insertan dos con una llamada a `splice()`, ¿qué ocurre con `length`?
    - A) Aumenta en cinco
    - B) Aumenta en uno
    - C) Disminuye en uno
    - D) No cambia

## 5 preguntas abiertas

1. Explica con tus palabras la diferencia entre copiar y modificar un array.
2. Explica por qué `slice()` usa un límite final excluido y da un ejemplo.
3. Describe por separado el retorno y el efecto de `splice()`.
4. ¿Por qué `const` no convierte un array en inmutable?
5. Explica cómo la inmutabilidad puede facilitar la depuración de una interfaz.

## 3 ejercicios pequeños

### Ejercicio A

Dado:

```js
const letras = ["A", "B", "C", "D", "E"];
```

Crea `centro` con `"B"`, `"C"` y `"D"` sin modificar `letras`. Usa únicamente un método estudiado.

### Ejercicio B

Dado:

```js
const cola = ["Ana", "Beto", "Carla", "Diego"];
```

Retira `"Beto"` y `"Carla"` con una operación, guarda los valores retirados y muestra ambos arrays.

### Ejercicio C

Dado:

```js
const pasos = ["analizar", "publicar"];
```

Inserta `"desarrollar"` y `"probar"` antes de `"publicar"` mediante una operación. Guarda también el retorno del método.

## Ejercicio tipo entrevista técnica

Implementa una función `actualizarAgenda(agenda)` que:

- reciba un array con al menos seis actividades;
- conserve `agenda` sin cambios;
- cree una copia;
- elimine de la copia las dos actividades centrales;
- inserte en esa misma posición `"revisión"` y `"descanso"`;
- devuelva la copia actualizada.

Restricciones:

- Solo puedes usar `length`, `slice()` y `splice()`.
- No uses ciclos, recursión, spread ni métodos no estudiados.
- Si la longitud es par, considera centrales las dos posiciones alrededor de la mitad.
- No incluyas una solución hasta haber explicado cómo calculas la posición.

Además del código, explica:

1. Qué referencias son nuevas.
2. Qué devuelve internamente `splice()`, aunque no sea el resultado final.
3. Por qué la entrada permanece intacta.
