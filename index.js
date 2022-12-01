/* Spread Operator / Rest Operator */

// add the elements of an existing array into a new array
var certsToAdd = ['Algorithms and Data Structures', 'Front End Libraries']; 
var certifications = ['Responsive Web Design', ...certsToAdd, 'Data Visualization', 'APIs and Microservices', 'Quality Assurance and Information Security'];
console.log(certifications);

let elements = [1,2,3];
let num = [4,5,6];
console.log(num);
num = [elements, ...num];
console.log(num);


// pass elements of an array as arguments to a function
function addThreeNumbers(x, y, z) { 
	console.log(x+y+z)
}
var args = [0, 1,10];
addThreeNumbers(...args);

function welcome(m1,m2,m3){
  console.log(`${m1} ${m2} ${m3}  `);
}
let text = ['how', 'are', 'you'];
welcome(...text);

// copy arrays
var arr = [1, 2, 3];
var arr2 = [...arr]; // like arr.slice()
arr2.push(4); 
console.log(arr);
console.log(arr2);

let text2 = [...text];
console.log(text2);

// REST: condense multiple elements into an array
function multiply(multiplier, ...theArgs) {
  return theArgs.map(function(element) {
    return multiplier * element;
  });
}

var arr = multiply(2, 1, 2, 3); 
console.log(arr)

function sum(sum, ...nums){
  
  nums.forEach(element =>{
    sum+=element;
  })
  return sum;
}
console.log(sum(6,1,2,3));
