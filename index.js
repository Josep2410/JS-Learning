// static = belongs to the class, not the objects
//               properties: useful for caches, fixed-configuration
//               methods:    useful for utility functions

class Car{

  static numberOfCars = 0;

  constructor(model){
      this.model = model;
      Car.numberOfCars += 1;
  }
  static startRace(){
      console.log("3...2...1...GO!");
  }
}

const car1 = new Car("Mustang");
const car2 = new Car("Corvette");
const car3 = new Car("BMW");

console.log(Car.numberOfCars);
Car.startRace();

//All Humans share one bank account. Mwahahaha
class human {

  static moneyInBank = 20;
  
  constructor(name, age){
    this.name = name;
    this.age = age;
    human.moneyInBank-=2;
  }

  static sleepBreak(){
    console.log(`The humans are sleeping...`);
  }

}

const human1 = new human("Arthur", 52);
const human2 = new human("Taylor", 32);
console.log(`Money remaining: $${human.moneyInBank}`);
human.sleepBreak();