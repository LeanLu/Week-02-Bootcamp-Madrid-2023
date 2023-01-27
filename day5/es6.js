export class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.isAlive = true;
  }

  greeting() {
    console.log(`Hola soy ${this.name}`);
  }

  kill() {
    this.isAlive = false;
  }
}

export class Student extends PersonClass {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  greeting() {
    super.greeting();
    console.log(`Estudio ${this.course}`);
  }
}
