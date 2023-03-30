const left = document.getElementById("left");
const right = document.getElementById("right");
const generator = document.getElementById("btGenerator");

let paragraph = document.getElementById("short");
// let img = document.getElementById("img").src;


let maria = {     // an object
    short: "Sed tincidunt tellus vitae ex pretium gravida quis at sem. Morbi sollicitudin malesuada ultricies. Proin blandit porttitor fermentum. Proin at justo dictum, congue ligula ut, convallis mi. Etiam eu viverra mi, et porta nulla. Vestibulum sed suscipit nulla, sed bibendum lacus. Suspendisse eget velit erat.",  // by key "name" store value "John"
    pfpPath: "https://us.123rf.com/450wm/fizkes/fizkes2007/fizkes200701872/152319944-close-up-headshot-portrait-of-smiling-vietnamese-young-woman-look-at-camera-talk-on-video-call.jpg?ver=6"        // by key "age" store value 30
  };

let jose ={
    short: "Aenean fermentum velit lacus, faucibus feugiat justo posuere id. Quisque pharetra quam libero, vel porttitor augue lacinia vel. Curabitur faucibus diam a ipsum luctus dictum. Suspendisse vulputate ante sit amet velit eleifend euismod. Suspendisse faucibus varius est, et tempus tellus laoreet at. Sed vel scelerisque nunc. Suspendisse et aliquet velit. Proin congue dapibus leo, in placerat dolor pretium blandit. Nulla id placerat velit, eget suscipit nisi.",
    pfpPath: "https://www.shutterstock.com/image-photo/portrait-smiling-african-american-student-260nw-1194497215.jpg"
};

let users = [maria, jose];


let i = 3;

left.addEventListener("click", function(e){
    i--;    
    paragraph.textContent = users[i].short;
    // img = users[i].pfpPath;
    document.getElementById("img").src = img.src.replace(users[i].pfpPath);
})

