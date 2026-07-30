# Cheatsheet — Día 2

| Método | Qué hace | Qué devuelve | Modifica el array | Complejidad aproximada | Cuándo usarlo | Ejemplo |
|---|---|---|---|---|---|---|
| `array.push(valor)` | Agrega uno o más elementos al final | La nueva longitud | Sí | O(1) amortizada | Cuando un valor nuevo debe quedar al final | `cola.push("nuevo")` |
| `array.pop()` | Elimina el último elemento | El elemento eliminado o `undefined` | Sí | O(1) | Cuando necesitas retirar o recuperar el último | `ultimo = cola.pop()` |
| `array.shift()` | Elimina el primer elemento | El elemento eliminado o `undefined` | Sí | O(n) | Cuando necesitas atender o retirar el primero | `primero = cola.shift()` |
| `array.unshift(valor)` | Agrega uno o más elementos al inicio | La nueva longitud | Sí | O(n) | Cuando un valor debe tener prioridad al inicio | `cantidad = cola.unshift("urgente")` |

## Mapa rápido

```text
                INICIO                         FINAL
                   |                             |
        agrega: unshift()              agrega: push()
        elimina: shift()               elimina: pop()

Agrega  -> devuelve nueva longitud
Elimina -> devuelve elemento retirado
```

## Recordatorios

- Los cuatro métodos modifican el array original.
- `shift()` y `unshift()` pueden desplazar muchos índices: O(n).
- `push()` y `pop()` normalmente no desplazan los índices existentes.
- O(1) y O(n) describen cómo crece el trabajo, no una duración exacta.
- Sobre un array vacío, `shift()` y `pop()` devuelven `undefined`.
- Estado final y valor devuelto son observaciones distintas.

## Preguntas rápidas

- ¿Agregar o eliminar?
- ¿Inicio o final?
- ¿Necesitas guardar un elemento o una cantidad?
- ¿Cómo queda el array después de la operación?
- ¿Qué índices cambian?
