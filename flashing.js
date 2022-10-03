const flashing = document.querySelector(".flashButton");
const div1 = document.querySelector(".div1");
const div2 = document.querySelector(".div2");
const div3 = document.querySelector(".div3");
const div4 = document.querySelector(".div4");
const stop = document.querySelector(".stopButton");

flashing.addEventListener("click", flash);

function flash(){
  const party = setInterval(flashparty, 100);
  function flashparty(){
    if(div1.style.display =="none"){
      div1.style.display = "block";
      div2.style.display = "block";
      div3.style.display = "block";
      div4.style.display = "block";
    }
    else{
      div1.style.display = "none";
      div2.style.display = "none";
      div3.style.display = "none";
      div4.style.display = "none";
    }
  }

  stop.addEventListener("click", ()=>{
    div1.style.display = "block";
    div2.style.display = "block";
    div3.style.display = "block";
    div4.style.display = "block";
    clearInterval(party);
  })


}