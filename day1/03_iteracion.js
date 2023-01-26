/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
const aData = [10, 20, 30, 40];
const userName = 'Elefante';

console.log(aData[1]);
console.log(userName[2]);

aData[1] = 56;
console.log(aData[1]);

/*
Ejemplo de intento de mutación de un String. Da un error en la consola TypeError.
userName[2] = 'a';
console.log(userName[2]);
*/

/* Ejemplo de reasignación de String. NO se puede porque es const, por lo tanto constante.
userName = 'elAfante';
*/

/*
Ejemplo de Array reasignable. NO se puede porque es "const"
aData = [50, 60, 70, 80]
*/

// Sí podría mutar sus valores. Ex.:
for (let i = 0; i < aData.length; i++) {
  aData[i] = i + 1;
}

// En este caso NO reasignamos el Array sino que mutamos cada uno de sus valores.

console.log(aData);

// Para hacer un objecto inmutable:
Object.freeze(aData);
/* TypeError porque no puedo reasignar un object freeze
aData[0] = 23;
*/

let foo;
console.log(typeof foo);
foo = 12;
console.log(typeof foo);
foo = 'Carlos';
console.log(typeof foo);
foo = {};
console.log(typeof foo);

/* Ejemplo
function bar(p) {
  // Parámetro p
  let z;
}

const x = 3;
bar(x); // Argumento X
*/

/* TypeError: Trato de valor primitivo como objeto.
let answer = true;
answer.opposite = false;
*/

// Variable undefined porque está asignada a un valor undefined.
let noExisto;
console.log(noExisto);

/* ReferenceError: Cuando no está definida la variable antes. NO es undefined.
console.log(variableSinDefinir);
*/

// Numbers:

// Infinity:
console.log(Number.MAX_SAFE_INTEGER);
const c = 9_007_199_254_740_991;
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE * 9_007_199_254_740_991);

// Casting Numbers:
let z = 3;
console.log(z + '4');
console.log(typeof z);
console.log('cuatro' * z);

// Casting Booleans:
// Falsy
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(0n));
console.log(Boolean(''));
console.log(Boolean(NaN));

// Truthy:
console.log(Boolean({}));
console.log(Boolean([]));
console.log(Boolean('Pepe'));
console.log(Boolean(10));
