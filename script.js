const telaLogin = document.querySelector ('main');
telaLogin.style.backgroundColor = 'blueviolet';

const login = document.querySelector ('h2');
console.log (login);
login.style.color = 'yellow';
login.style.fontSize = '50px';

const button = document.querySelector ('button')
console.log (button);
button.style.backgroundColor = 'blue';
button.style.borderRadius = '10px';
button.style.borderBlockColor = 'black';
button.style.color = 'white';

const errorMessage = document.querySelector ('.error-text');
errorMessage.classList.add ('visible');
errorMessage.id = 'senha-incorreta';

const usernameInput = document.querySelector ('#login-usuario');
usernameInput.classList.remove ('error');
usernameInput.classList.add ('login-usuario');

const passwordInput = document.querySelector ('#login-senha');
passwordInput.classList.remove ('correct');
passwordInput.classList.add ('login-senha');