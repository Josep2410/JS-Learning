const flashing = document.querySelector(".flashButton");

const div1 = document.querySelector(".div1");
const div2 = document.querySelector(".div2");
const div3 = document.querySelector(".div3");
const div4 = document.querySelector(".div4");
const allDivs = document.querySelectorAll("div");
const stop = document.querySelector(".stopButton");
const restart = document.querySelector(".restartButton");

let w = 35;  

//flashing.addEventListener("click", flash);
flashing.addEventListener("click", slideDownwards);
flashing.addEventListener("click", spin);

function slideDownwards(){
 
  timer = setInterval(slideDown, 20);
 
  
  function slideDown(){

    if(w > 630){
      clearInterval(timer);

    }
    else{
      w+=5;
      div1.style.top = w + 'px';
      div2.style.top = w + 'px';
      div3.style.bottom = w + 'px';
      div4.style.bottom = w + 'px';
    }
 
    stop.addEventListener("click", ()=>{
     
      clearInterval(timer);
    });

    restart.addEventListener("click",()=>{
      w = 25;

      //reset positions
      div1.style.top = w + 'px';
      div2.style.top = w + 'px';
      div3.style.bottom = w + 'px';
      div4.style.bottom = w + 'px';
    })

    }

  

}

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


  function setDisplayOn(item, index, array){
    item.style.display = "block";
  }
}

function spin(){
  let timerId = null;
  let degrees = 0;

  timerId = setInterval(rotate, 5);
  
  function rotate(){
    if (degrees>= 720){
      clearInterval(timerId);
    }
    else{
      degrees+=1;
      allDivs.forEach((item) => {
        item.style.transform = "rotateZ("+degrees+"deg)";
      }
      )
    }


  }
}




