/* eslint-disable capitalized-comments */

// const obj = {};
// const obj = new Object;   --> Al colocar las llaves vacías, se llama al constructor de objectos "new Object"

const obj = { 10: 'Pepe', age: 24, foo: 'algo' };

const aData = ['Pepe', 22];

console.log(obj);
console.log(aData);

console.log(obj.foo);
console.log(obj[10]);
// eslint-disable-next-line dot-notation
console.log(obj['foo']);

aData.push(true);
console.log(aData);

aData.foo = 'algo';
console.log(aData);
console.log(aData[3]); // foo NO tiene la posición 3.

const func = () => {};
func.prop = 23;
console.log(func);
