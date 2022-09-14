document.getElementById("multiply").onclick = function(){
  let product;
  firstInput = Number(document.getElementById("firstInput").value);
  secondInput = Number(document.getElementById("secondInput").value);
  product = ( firstInput* secondInput);
  document.getElementById("resultDisplay").innerHTML = product;
}

document.getElementById("divide").onclick = function(){
  let answer;
  firstInput = Number(document.getElementById("firstInput").value);
  secondInput = Number(document.getElementById("secondInput").value);
  answer = ( firstInput / secondInput);
  document.getElementById("resultDisplay").innerHTML = answer;
}
  

