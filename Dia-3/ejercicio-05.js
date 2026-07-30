/*
Título: ¿Conservar o editar?

Objetivo:
Decidir entre slice() y splice() según dos requisitos diferentes.

Estado inicial obligatorio:
const turnos = ["08:00", "09:00", "10:00", "11:00", "12:00"];

Situación:
Recepción necesita una lista independiente con los turnos de 09:00 a 11:00 para
imprimirla, pero el calendario original debe conservarse. Después, el turno de
12:00 se cancela y debe retirarse del calendario original.

Instrucciones:
1. Crea la variable turnosParaImprimir con el rango solicitado.
2. Retira el turno cancelado del array turnos.
3. Guarda lo retirado en una variable llamada cancelados.
4. Muestra los tres arrays.
5. Justifica en comentarios qué método elegiste para cada necesidad.

Restricciones:
- Utiliza únicamente slice() y splice().
- No escribas manualmente los arrays resultantes.
- No reasignes turnos.

Pistas:
- Una operación debe conservar el original en ese momento.
- La otra debe cambiar deliberadamente el calendario.
- Decide primero la intención y después calcula los argumentos.

Preguntas:
- ¿Importa el orden de las dos operaciones?
- ¿Cuál resultado representa una copia y cuál elementos eliminados?
*/

const turnos = ["08:00", "09:00", "10:00", "11:00", "12:00"];

// Escribe tu código debajo de esta línea.
