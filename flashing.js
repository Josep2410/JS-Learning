const flashing = document.querySelector(".flashButton");

const div1 = document.querySelector(".div1");
const allDivs = document.querySelectorAll("div");
const stop = document.querySelector(".stopButton");

flashing.addEventListener("click", flash);

function flash(){
  const party = setInterval(flashparty, 100);
  function flashparty(){
    if(div1.style.display =="none"){
     allDivs.forEach(setDisplayOn);
    }
    else{
      allDivs.forEach((item, index, array)=>{
        item.style.display = "none"});
    }
  }

  stop.addEventListener("click", ()=>{
    allDivs.forEach(setDisplayOn);
    clearInterval(party);
  })


}


function setDisplayOn(item, index, array){
  item.style.display = "block";
}


