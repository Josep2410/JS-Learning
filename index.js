// super = Refers to the parent class. 
//               Commonly used to invoke constructor of a parent class

class Animal{
    
  constructor(name, age){
      this.name = name;
      this.age = age;
  }
}
class Rabbit extends Animal{

  constructor(name, age, runSpeed){
      super(name, age);
      this.runSpeed = runSpeed;
  }
}
class Fish extends Animal{

  constructor(name, age, swimSpeed){
      super(name, age);
      this.swimSpeed = swimSpeed;
  }
}
class Hawk extends Animal{

  constructor(name, age, flySpeed){
      super(name, age);
      this.flySpeed = flySpeed;
  }
}

const rabbit = new Rabbit("rabbit", 1, 40);
const fish = new Fish("fish", 2, 80);
const hawk = new Hawk("hawk", 3, 200);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);

class Human{
  constructor(age, name, ssn){
    this.age = age;
    this.name = name;
    this.ssn = ssn;

  }
}

class Boy extends Human{
  constructor(age, name, ssn,genitals){
    super(age, name, ssn);
    this.genitals = genitals;

  }
}

class Girl extends Human{
  constructor(age,name,ssn,genitals){
    super(age, name, ssn);
    this.genitals = genitals;
    
  }
}

const boy = new Boy(24, "Paulo", 245, 'penis');
const girl = new Girl(24, "Shinanay", 253, 'vagina');

console.log(boy.age);
console.log(boy.name);
console.log(boy.ssn);
console.log(boy.genitals);

console.log(girl.age);
console.log(girl.name);
console.log(girl.ssn);
console.log(girl.genitals);
