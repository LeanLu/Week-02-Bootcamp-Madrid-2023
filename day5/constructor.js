import { PersonClass, Student } from './es6.js';

const p1 = {
  name: 'Pepe',
  age: 22,
};

const p2 = {
  name: 'Ernesto',
  age: 25,
};

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greeting = () => {
  console.log(`Hola soy ${this.name}`);
};

const p3 = new Person('Luisa', 34);
const p4 = new Person('Rosa', 64);

console.log(p1, p2, p3, p4);

const p5 = new PersonClass('Luisa', 34);
const p6 = new PersonClass('Rosa', 64);

p6.foo = 45;
delete p6.age;

console.log(p5, p6);

p6.kill();

console.log(p6);

const s1 = new Student('Ramón', 54, 'Angular');
s1.greeting();
