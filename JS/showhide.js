// animation: fade 1s ease forwards;

var x = document.getElementById("myDIV");
var y = document.getElementById("myDIV2");

var login = document.getElementById("login");
var register = document.getElementById("register");
var loginBtn = document.getElementById("loginButton");
var registerBtn = document.getElementById("registerButton");

// Contact Form

function contactButton() {
    
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
      x.style.animation = "fade 1s ease forwards"
    } 
}

function suggestionButton()  {
    
    if (y.style.display === "none") {
      y.style.display = "block";
      x.style.display = "none";
      y.style.animation = "fade 1s ease forwards"
    } 
}

// Login - Register

function loginButton() {

    if (login.style.display === "none") {
      login.style.display = "block";
      register.style.display = "none";
      login.style.animation = "fade 1s ease forwards"
      loginBtn.style.backgroundColor = "#DD5741";
      loginBtn.style.color = "white"
      registerBtn.style.backgroundColor = "white";
      registerBtn.style.color = "black"
    } 
}

function registerButton() {

    if (register.style.display === "none") {
      register.style.display = "block";
      login.style.display = "none";
      register.style.animation = "fade 1s ease forwards"
      registerBtn.style.backgroundColor = "#DD5741";
      registerBtn.style.color = "white"
      loginBtn.style.backgroundColor = "white";
      loginBtn.style.color = "black"
    } 
}

