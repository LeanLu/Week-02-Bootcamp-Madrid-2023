const sherlock = {
  surName: 'Holmes',
};

// ReferenceError: console.log(age);  Porque "age" no existe.

console.log(sherlock.age); // Devuelve "undefined" aunque no esté la referencia. Es una diferencia del modelo.

// TypeError: console.log(sherlock.age.foo); No puede leer la propiedad de un "undefined" porque "age" es "undefined", es un primitivo y NO tiene propiedades de objeto.

console.log(sherlock.surName.foo); // Devuelve "undefined" porque "surName" existe y el ".foo" podría ser un objeto. El siguiente debería dar TypeError.

// TypeError: console.log(sherlock.surName.foo.bar);

const capitan = 'Pepe';
// Manera Estándar de escribir --> const ship = { capitan: capitan };
const ship = { capitan };
console.log(ship);

const double = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
};

const aData = [1, 3, 5];

double(aData);
// Con el "for" se hace la mutación del objeto aData.

console.log(aData);

const doubleV2 = (array) => {
  const internalData = array;
  for (let i = 0; i < internalData.length; i++) {
    internalData[i] *= 2;
  }

  return internalData;
};

doubleV2(aData);
// Con el "for" de doubleV2 también se hace la mutación del objeto aData porque estoy apuntando al Array original.
console.log(aData);

const doubleV3 = ([...array]) => {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }

  return array;
};

console.log(doubleV3([...aData]));
// En este caso no cambio el Array original porque hemos hecho un clon en la función doubleV3.
console.log(aData);

const obj = { name: 'Pepe', age: 22 };

console.log(obj);
console.log(JSON.stringify(obj)); // Crea un String del objeto pasado.
console.log(typeof JSON.stringify(obj));

console.log(JSON.parse(JSON.stringify(obj))); // Crea un objeto nuevo a partir de un objeto serializado con JSON.stringify(obj). Genera un clon, no modifica el original.
console.log(typeof JSON.parse(JSON.stringify(obj)));

console.log(doubleV2(JSON.parse(JSON.stringify(aData))));
