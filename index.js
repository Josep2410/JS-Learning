const block = document.querySelector(".block");
const p1 = document.querySelector(".p1");
const block2 = document.querySelector(".block2");
const p2 = document.querySelector(".p2");

block.addEventListener("click", function(){
    p1.classList.toggle("p-display");
    block.classList.toggle("rotate");
})

block2.addEventListener("click", function(){
    p2.classList.toggle("p-display2");
    block2.classList.toggle("rotate");
})



