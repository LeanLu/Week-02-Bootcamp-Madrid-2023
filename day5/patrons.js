/* eslint-disable no-unused-vars */
// Literal:

const obj = {
  breed: 'husky',
};

const objChild = Object.create(obj);

// eslint-disable-next-line no-prototype-builtins
console.log(obj.hasOwnProperty('foo'));

console.log(objChild.breed);

// Factory:

function createFoo() {
  // Le indicamos que haga algo y luego devuelva un objeto pero con ciertas propiedades.
  return { foo: 'foo' };
}

const arrowCreate = () => ({}); // En el caso de Arrow Function tengo que colocar un paréntesis si quiero devolver un objeto para que no confunda las llaves del statement con las llaves del objeto.

// Patrón Constructor:

// Patrones de ejecución:

function bar() {
  console.log('Soy bar');
}

// Uso - patrón function:
bar();

// Uso - patrón método:
const obj2 = {
  tururu: bar,
};

obj2.tururu();

// Uso - patrón constructor:
// Toma cualquier valor de JS y le agrego un "new" y la ejecuta:

// eslint-disable-next-line new-cap
const newObject = new bar();

// Crea un objeto.
// Lo usa como "this" dentro de la función.
// Lo retorna.
