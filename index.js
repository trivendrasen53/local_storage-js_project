

function myfunc(event){
    event.preventDefault();

let Email=document.getElementById("Email").value;
let Password=document.getElementById("Password").value;
let btn = document.getElementById("btn").value;

localStorage.setItem("Email",Email);
localStorage.setItem("Password",Password);


}
