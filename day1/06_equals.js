/* eslint-disable capitalized-comments */
const x = 2;

/* Si coloco un if para ver si un valor === NaN no tiene sentido porque siempre sería "false"
if (x===NaN) { };
*/

if (Object.is(x, NaN)) {
  console.log('X is NaN');
}

isNaN(''); // true
Number.isNaN(''); // false --> Porque no realiza Casting sobre el Value pasado como parámetro.
Number.isNaN('' * 2); // true --> Porque en la expresión sí se hace el Casting. Y luego nada *2 es NaN, y al evaluarlo es true.
