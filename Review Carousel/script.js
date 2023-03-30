const left = document.getElementById("left");
const right = document.getElementById("right");
const generator = document.getElementById("btGenerator");

let paragraph = document.getElementById("short");
let img = document.getElementById("img").src;


let maria = {     // an object
    short: "Sed tincidunt tellus vitae ex pretium gravida quis at sem. Morbi sollicitudin malesuada ultricies. Proin blandit porttitor fermentum. Proin at justo dictum, congue ligula ut, convallis mi. Etiam eu viverra mi, et porta nulla. Vestibulum sed suscipit nulla, sed bibendum lacus. Suspendisse eget velit erat.",  // by key "name" store value "John"
    pfpPath: "../images/maria.webp"        // by key "age" store value 30
  };

let jose ={
    short: "Aenean fermentum velit lacus, faucibus feugiat justo posuere id. Quisque pharetra quam libero, vel porttitor augue lacinia vel. Curabitur faucibus diam a ipsum luctus dictum. Suspendisse vulputate ante sit amet velit eleifend euismod. Suspendisse faucibus varius est, et tempus tellus laoreet at. Sed vel scelerisque nunc. Suspendisse et aliquet velit. Proin congue dapibus leo, in placerat dolor pretium blandit. Nulla id placerat velit, eget suscipit nisi.",
    pfpPath: "../images/jose.webp"
};

let paula ={
    short: "Nam commodo feugiat massa. Sed ex odio, tempus id lectus eu, finibus ultricies nunc. In cursus, orci in gravida congue, dui nibh accumsan elit, at accumsan turpis est et dolor. In hac habitasse platea dictumst. Nulla varius ullamcorper ante auctor accumsan. Ut urna tellus, lacinia quis egestas id, maximus vel nulla. Morbi ac libero pretium, commodo lorem auctor, pulvinar orci. Duis varius arcu at libero hendrerit, ut fermentum turpis varius. Vestibulum vehicula libero sem. Donec non auctor metus.",
    pfpPath: "../images/paula.jpg"
};

let lucas ={
    short: "Duis elementum feugiat urna non efficitur. Pellentesque in laoreet lacus. Nam nunc arcu, elementum ut pretium quis, finibus iaculis urna. Donec feugiat commodo ligula, sit amet consectetur quam iaculis eget. Etiam malesuada pretium neque quis suscipit. Curabitur sodales, massa id euismod tincidunt, dui eros fringilla ligula, fringilla vulputate turpis augue id eros.",
    pfpPath: "../images/lucas.jpg"
};

let users = [maria, jose, paula, lucas];


let i = 0;

left.addEventListener("click", function(e){
    // e.preventDefault();
    if(i > 0){
        i--;    
        paragraph.textContent = users[i].short;
        // img = users[i].pfpPath;
        // document.getElementById("img").src = img.src.replace(users[i].pfpPath);
        document.getElementById("img").src = users[i].pfpPath;
    }
})

right.addEventListener("click", function(a){
    // a.preventDefault();
    if(i < (users.length -1)){
        i++;    
        paragraph.textContent = users[i].short;
        // img = users[i].pfpPath;
        // document.getElementById("img").src = img.src.replace(users[i].pfpPath);
        document.getElementById("img").src = users[i].pfpPath;
    }
})

