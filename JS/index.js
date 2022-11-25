import {Request} from "./requests";
import {UI} from "./ui";

const postsList = document.getElementById("posts");
const postContext = document.getElementById("contexts");

const loginForm = document.getElementById("login");
const registerForm = document.getElementById("register");

const request = new Request("http://localhost:3000/posts");
const ui = new UI();

eventListeners();

function eventListeners() {
    document.addEventListener("DOMContentLoaded",getAllPosts);
    document.addEventListener("DOMContentLoaded",getPostContext);
    
    loginForm.addEventListener("submit", function handleSubmit(event) {
        event.preventDefault();
        loginForm.reset();
    });

    registerForm.addEventListener("submit", function handleSubmit(event) {
        event.preventDefault();
        registerForm.reset();
    });
}

function getAllPosts(){
    request.get()
    .then(posts => {
        ui.addAllPostToUI(posts);
    })
    .catch(err => console.log(err));
}

function getPostContext(){

    request.get()
    .then(contexts => {
        ui.addContextToUI(contexts);
    })
    .catch(err => console.log(err));
}