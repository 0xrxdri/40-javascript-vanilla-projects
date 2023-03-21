const backgrounds = ['#430c77', '#25ac52', '#c4121b', '#c412ac'];


let paragraph = document.getElementById("bkcolor");
paragraph.textContent += backgrounds[0];    

let i = 0;

function click(i){
    i++;
    if(i > backgrounds.length){
        i = 0;
    }
    document.body.style.background = backgrounds[i];
    paragraph.textContent = backgrounds[i];    


}
let boton = getElementById('button');
boton.addEventListener("click", alert("hola"));
