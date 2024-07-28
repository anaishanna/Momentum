/* const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button"); */

/* 연습용
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    const username = loginInput.value;
    if (username === "") {
        alert("plese write your name");
    } else if (username.length > 15) {
        alert("your name is too long")
    }
}

loginButton.addEventListener("click", onLoginBtnClick);
*/

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"


function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const usernameThatUserWrote = loginInput.value;
    localStorage.setItem(USERNAME_KEY, usernameThatUserWrote);
    paintGreetings(usernameThatUserWrote);
}

function paintGreetings(username) {
    greeting.innerText = `${username}'s To Do List`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}

