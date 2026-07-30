# Cheatsheet de arrays — Día 3

| Método | Qué hace | Qué devuelve | ¿Modifica el array? | Complejidad aproximada | Caso de uso | Ejemplo |
|---|---|---|---|---|---|---|
| `push(valor)` | Agrega al final | Nueva longitud | Sí | O(1) amortizada | Añadir a una pila o lista | `a.push("X")` |
| `pop()` | Elimina del final | Elemento eliminado o `undefined` | Sí | O(1) | Retirar el último | `a.pop()` |
| `shift()` | Elimina del inicio | Elemento eliminado o `undefined` | Sí | O(n) | Atender una fila | `a.shift()` |
| `unshift(valor)` | Agrega al inicio | Nueva longitud | Sí | O(n) | Colocar una prioridad al frente | `a.unshift("X")` |
| `slice(inicio, fin)` | Copia un rango; `fin` se excluye | Array nuevo con la copia | No | O(k), según lo copiado | Conservar el original y extraer una parte | `a.slice(1, 3)` |
| `splice(inicio, cantidad, ...nuevos)` | Elimina, inserta o reemplaza | Array con elementos eliminados | Sí | O(n) en general | Editar una posición concreta | `a.splice(1, 2, "X")` |

## Mapa de decisión

```text
¿Quiero cambiar el array original?
|
+-- No --> slice()
|
+-- Sí
    |
    +-- agregar al final ------> push()
    +-- eliminar del final ----> pop()
    +-- agregar al inicio -----> unshift()
    +-- eliminar del inicio ---> shift()
    +-- editar cualquier zona -> splice()
```

## Parámetros que suelen confundirse

```text
slice(2, 5)       copia índices 2, 3 y 4
          ^
          índice final excluido

splice(2, 5)      elimina hasta cinco elementos desde el índice 2
           ^
           cantidad, no índice final
```

`k` representa la cantidad de elementos copiados. Las complejidades son modelos aproximados; los motores pueden aplicar optimizaciones.
