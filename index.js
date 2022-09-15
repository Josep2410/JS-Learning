// arrow function expression = compact alternative to a traditional function expression
//      =>

const grades = [100, 50, 90, 60, 80, 70];

grades.sort((x, y) => y - x);
grades.forEach((element) => console.log(element));

const word = 'a million dollars';
let message = "whats up didily doers";

//TRADITIONAL function
/* function greeting (message){
  console.log(message);
} */

//FUNCTION expression
/* const greeting = function(message){
  console.log(message);
} */

//arrow function expression
const greeting = message => {
  console.log(`${word} finally`);
}
greeting(message);


//combining rest parameters and function expressions

 const multiply = function(...multiplicands){
  let product = 1 ;
  for(let item of multiplicands){
    product*=item;
  }
  return product;
}

console.log(multiply( 2 , 10 , 14 ));


