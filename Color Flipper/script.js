const backgrounds = ['#430c77', '#25ac52', '#c4121b', '#c412ac'];


let paragraph = document.getElementById("bkcolor");
paragraph.textContent += backgrounds[0];    

let i = 0;

function click(i){
    i = i+1;
    if(i > backgrounds.length){
        i = 0;
    }
    document.body.style.background = backgrounds[i];
    paragraph.textContent = i;    


}
const boton = document.getElementById('button');
// boton.addEventListener("click", alert("hello worl"));

boton.addEventListener('click', function(e) {
    e.preventDefault();
  
    i = i+1;
    if(i > backgrounds.length){
        i = 0;
    }
    document.body.style.background = backgrounds[i];
    paragraph.textContent = i; 
  
  });
  //no entiendo porque hay que hacer el prevent default