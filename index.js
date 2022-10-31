const show = document.querySelector(".on");
const p = document.querySelector("p");
const off = document.querySelector(".off");

show.addEventListener("click", function(){
    p.classList.toggle("p-display");
    off.classList.toggle("off-display");
    show.classList.toggle("on-display");
})

off.addEventListener("click", function(){
    p.classList.toggle("p-display");
    off.classList.toggle("off-display");
    show.classList.toggle("on-display");
})
