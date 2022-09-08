// Two ways to take user input, using only JS or JS and HTML


/*
let userInput = window.prompt("What's your name?");
console.log(userInput);
*/


let username;

document.getElementById("myButton").onclick = function(){
  username = document.getElementById('myText').value;
  console.log(username);
  document.getElementById("myLabel").innerHTML=username;
}