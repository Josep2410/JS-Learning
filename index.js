// inheritance = a child class can inherit all the 
//                        methods and properties from another class

class Animal{

  alive = true;

  eat(){
      console.log(`This ${this.name} is eating`);
  }
  sleep(){
      console.log(`This ${this.name} is sleeping`);
  }
}

class Rabbit extends Animal{

  name = "rabbit";

  run(){
      console.log(`This ${this.name} is running`);
  }
}
class Fish extends Animal{

  name = "fish";

  swim(){
      console.log(`This ${this.name} is swimming`);
  }
}
class Hawk extends Animal{

  name = "hawk";

  fly(){
      console.log(`This ${this.name} is flying`);
  }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();


class car{
  company = 'Honda'

  drive(){
    console.log(`${this.company} ${this.model} goes: Vroom.`);
  }

  break(){
    console.log(`${this.company} ${this.model} goes: Eikkk.`);
  }
  stats(){
    console.log(`${this.company} ${this.model} ${this.horsePower} ${this.mpg}`)
  }
}

class Civic extends car{
  model = 'civic';
  horsePower = 180;
  mpg = 34;

  sportsMode(){
    console.log(`${this.company} ${this.model} : sports mode activated`);
  }
}

class Accord extends car{
  model = 'acoord';
  horsePower = 150;
  mpg = 38;
  ecoFriendly(){
    console.log(`${this.model} eco Friendly mode activated`);
  }
 
}

const civic = new Civic();
const accord = new Accord();

civic.stats();
civic.drive();
civic.sportsMode();
accord.break();
accord.stats();
