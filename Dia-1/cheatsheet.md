# Cheatsheet — Día 1

| Método o propiedad | Qué hace | Qué devuelve | Modifica | Complejidad habitual | Ejemplo |
|---|---|---|---|---|---|
| `array.length` | Consulta la cantidad de elementos | Un número | No | O(1) | `colores.length` |
| `array.push(valor)` | Agrega un elemento al final | La nueva longitud | Sí | O(1) amortizada | `colores.push("azul")` |
| `array.pop()` | Elimina el último elemento | El elemento eliminado o `undefined` si está vacío | Sí | O(1) | `colores.pop()` |

## Recordatorios

- Primer índice: `0`.
- Último índice de un array no vacío: `array.length - 1`.
- `length` no lleva paréntesis.
- `push()` y `pop()` cambian el mismo array.
- Estado modificado y valor devuelto son cosas diferentes.
- O(1) significa que el trabajo habitual no crece con la cantidad de elementos.
- “Amortizada” indica que alguna ampliación interna ocasional puede costar más, aunque agregar al final suele ser constante.

## Preguntas rápidas

- ¿Necesitas la cantidad nueva? Piensa en el retorno de `push()`.
- ¿Necesitas conservar lo retirado? Guarda el retorno de `pop()`.
- ¿Solo necesitas contar? Consulta `length` sin modificar nada.
