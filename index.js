// this = reference to a particular object
//           the object depends on the immediate context

const car1 = {
  model:"Mustang",
  color:"red",
  year:2023,

  drive : function(){
      console.log(`You drive a ${this.model} `);
  },
  brake : function(){
      console.log("You step on the brakes");
  }
}
const car2 = {
  model:"Corvette",
  color:"blue",
  year:2024,

  drive : function(){
      console.log("You drive the car");
  },
  brake : function(){
      console.log("You step on the brakes");
  }
}

console.log(car1.model);
console.log(car1.color);
console.log(car1.year);
car1.drive();
car1.brake();

console.log(car2.model);
console.log(car2.color);
console.log(car2.year);
car2.drive();
car2.brake();


const person1 = {
  name:"Billy", 
  age: 23,
  gender: "boy", 

  introduction : function(){
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
  }

}

const person2 = {
  name:"Erica", 
  age: 26,
  gender: "girl", 
  introduction : function(){
    console.log(`Hello, my name is ${person2.name} and I am ${person2.age} years old`);
  }
}

console.log(person2.name);
person1.introduction();
person2.introduction();