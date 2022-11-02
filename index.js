let btn = document.querySelectorAll("#watch");
let word = 'word hello';
console.log(word.substring(3.6));
const words = document.querySelector("#text");

const sub = document.querySelector("#sub-text");
btn.forEach(item =>{
  item.addEventListener("click", function(){
    words.textContent = rotate();
    words.append(item.value);
   sub.textContent.substring(0,1) = item.value;
  
  })
})

function rotate(){
  return words.textContent.length>1? words.textContent.substring(1,2) : words.textContent;
}

