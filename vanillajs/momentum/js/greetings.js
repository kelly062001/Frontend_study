const loginForm = document.querySelector('#login-form ');
const loginInput = document.querySelector('#login-form input');
const greeting =document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginsubmit(event){
    event.preventDefault();
    loginForm.classList.add('hidden');
    const username=loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `hello ${username}`;
}

loginForm.addEventListener('submit', onLoginsubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginsubmit);
}else{
    paintGreetings(savedUsername);
}