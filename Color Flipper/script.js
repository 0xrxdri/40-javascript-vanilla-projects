// const backgrounds = ['#430c77', '#25ac52', '#c4121b', '#c412ac'];


let purple = {     
    name: "purple",  
    code: '#430c77'       
};

let green = {     
    name: "green",  
    code: '#25ac52'       
};
let red = {     
    name: "red",  
    code: '#c4121b'       
};
let pink = {     
    name: "pink",  
    code: '#c412ac'       
};

const backgrounds = [purple, green, red, pink];
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
    if(i >= backgrounds.length){
        i = 0;
    }
    document.body.style.background = backgrounds[i].code;
    paragraph.textContent = backgrounds[i].name; 
    paragraph.style.display = "flex";
    paragraph.style.justifyContent = "center";
  
  });
  //no entiendo porque hay que hacer el prevent default