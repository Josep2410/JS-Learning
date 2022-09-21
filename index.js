// get = binds an object property to a function 
//          when that property is accessed
// set = binds an object property to a function
//          when that property is assigned a value

class Car{
  constructor(power){
      this._gas = 25;
      this._power = power;
  }
  get power(){
      return `${this._power}hp`;
  }
  get gas(){
      return `${this._gas}L (${this._gas / 50 * 100}%)`;
  }
  set gas(value){
      if(value > 50){
          value = 50;
      }
      else if(value < 0){
          value = 0;
      }
      this._gas = value;
  }
}

let car = new Car(400);

/* car.gas = 100; */

console.log(car.power);
console.log(car.gas);

class Phone {
  constructor(price){
    this._price = price;
    this._battery = 100;
  }
  get price(){
    return `$${this._price}`;
  }

  get battery(){
      return `Your phone is at ${(this._battery / 8) *100}%`;
  }

  set battery(usage){
    if(usage > 8)
      usage = 8;
    else if( usage < 0)
      usage = 0;
    this._battery = usage;
  }
}

const iphone8 = new Phone(400);

console.log(iphone8.price);

iphone8.battery = 5;

console.log(iphone8.battery);