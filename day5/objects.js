let human = { teeth: 32 };

let gwen = { age: 19 };

console.log(gwen.teeth);

gwen.__proto__ = human;

console.log(gwen.teeth);

let mammal = {
  hasHair: true,
};

human.__proto__ = mammal;

console.log(gwen.hasHair);

gwen.teeth = 30;

console.log(gwen.teeth);
console.log(human.teeth);

// Para crear objecto teniendo un Prototype:
let gwen2 = Object.create(human);
console.log(gwen2.teeth);
