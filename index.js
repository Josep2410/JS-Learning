// setTimeout() = invokes a function after a number of milliseconds            
//                            asynchronous function (doesn't pause execution) 

/* let item = "cryptocurrency";
let price = 420.69;

let timer1 = setTimeout(firstMessage, 3000, item, price);
let timer2 = setTimeout(secondMessage, 6000);
let timer3 = setTimeout(thirdMessage, 9000);

function firstMessage(item, price){
    alert(`Buy this ${item} for $${price}`);
}
function secondMessage(){
    alert(`This is not a scam!`);
}
function thirdMessage(){
    alert(`DO ITT!`);
}
document.getElementById("myButton").onclick = function(){
    clearTimeout(timer1); 
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert(`Thanks for buying!`);
}
 */







/* 
   ================= Ad starter and stopper program ================
 */

   let price = 4.99
document.getElementById("ad").onclick = function(){
  let timer1 = firstMessage(price);
  let timer2 = setTimeout(secondMessage, 2000);
  let timer3 = setTimeout(thirdMessage, 6000);
  let timer4 = setTimeout(fourthMessage, 10000);

  document.getElementById("myButton").onclick = function(){
    clearTimeout(timer1); 
    clearTimeout(timer2);
    clearTimeout(timer3);
    clearTimeout(timer4);
  }
}

function firstMessage(price){
  alert(`Buy enlargement pills for $${price}`);
}

function secondMessage(){
  alert(`Make your woman happy with this simple trick`);
}

function thirdMessage(){
  alert(`Dont miss out`);

}
function fourthMessage(){
  alert(`The industry does not want you to know this!`);
  
}
