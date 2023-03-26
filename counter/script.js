const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const decrease = document.getElementById("decrease");

let num = 0;

let paragraph = document.getElementById("count");

paragraph.textContent = num;

increase.addEventListener('click', function(e){
    e.preventDefault();
    num++;
    paragraph.textContent = num;   
});

reset.addEventListener('click', function(e){
    e.preventDefault();
    num = 0;
    paragraph.textContent = num;
});

decrease.addEventListener('click', function(e){
    e.preventDefault();
    num--;
    paragraph.textContent = num;
})