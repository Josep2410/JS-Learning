

//array.map() = executes a provided callback function
//                         once for each array element
//                         AND creates a new array

//array.map()
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(square);
let cubes = numbers.map(cube);

//For Each method
numbers.forEach((element) =>{
  console.log( Math.pow(element,2));
})

//numbers.forEach(print);
//squares.forEach(print);
//cubes.forEach(print);

function square(element){
    return Math.pow(element, 2);
}
function cube(element){
    return Math.pow(element, 3);
}
function print(element){
    console.log(element);
}