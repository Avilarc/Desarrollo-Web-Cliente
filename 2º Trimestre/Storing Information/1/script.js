const loginBtn = document.getElementById('bot-log');
const registerBtn = document.getElementById('bot-reg');
const logoutBtn = document.getElementById('bot-out');
const deleteBtn = document.getElementById('bot-del');
const loginForm = document.querySelector('#log-section form');
const registerForm = document.querySelector('#reg-section form');
const logSection = document.getElementById('log-section');
const regSection = document.getElementById('reg-section');

loginBtn.addEventListener('click', showLoginForm);
registerBtn.addEventListener('click', showRegisterForm);
logoutBtn.addEventListener('click', logout);
deleteBtn.addEventListener('click', deleteUser);
loginForm.addEventListener('submit', login);
registerForm.addEventListener('submit', register);

function showLoginForm(e) {
    e.preventDefault();
    logSection.style.display = 'block';
    regSection.style.display = 'none';
}

function showRegisterForm(e) {
    e.preventDefault();
    regSection.style.display = 'block';
    logSection.style.display = 'none';
}

function login(e) {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        alert(`Hello, ${user.nombre}!`);
        applyPreferences(user);
    } else {
        alert('User not found. Please register.');
    }
}

function register(e) {
    e.preventDefault();
    const user = {
        nombre: document.querySelector('#reg-section input[name="nombre"]').value,
        edad: document.querySelector('#reg-section input[name="edad"]').value,
        sexo: document.querySelector('#reg-section select[name="sexo"]').value,
        color: document.querySelector('#reg-section select[name="color"]').value,
        idioma: document.querySelector('#reg-section select[name="idioma"]').value,
    };
    localStorage.setItem('user', JSON.stringify(user));
    alert('Registration successful!');
}

function logout(e) {
    e.preventDefault();
    localStorage.removeItem('user');
    alert('Logged out successfully!');
}

function deleteUser(e) {
    e.preventDefault();
    localStorage.removeItem('user');
    alert('User deleted successfully!');
}

function applyPreferences(user) {

    document.body.style.backgroundColor = user.color;

    const labels = document.querySelectorAll('label');
    labels.forEach(label => label.style.color = user.color);


    const greeting = user.idioma === 'español' ? 'Hola' : user.idioma === 'ingles' ? 'Hello' : 'Bonjour';
    alert(`${greeting}, ${user.nombre}!`);
}