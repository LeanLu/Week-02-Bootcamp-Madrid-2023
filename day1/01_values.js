// Los 7 valores primitivos de JS:

console.log(6, typeof 6);
console.log('Pepe', typeof 'Pepe');
console.log(true, typeof true);

console.log(undefined, typeof undefined);
console.log(null, typeof null);

console.log(5n, typeof 5n);
// eslint-disable-next-line symbol-description
console.log(Symbol(), typeof Symbol());

// Referenciados - Objetos (valores NO primitivos):
// Objects:
console.log({}, typeof {});
console.log([], typeof []); // Es un Array que es un tipo de objeto con un comportamiento especial.
console.log(new Date(), typeof new Date());
console.log(/a/i, typeof /a/i); // Se llaman expresiones regulares.

// Functions:
console.log(() => {}, typeof (() => {}));

/* Ejemplos para las funciones de Map y toUpperCase():
Ejemplo 1:  [].map();
Ejemplo 2:  'pepe'.toUpperCase();
*/
