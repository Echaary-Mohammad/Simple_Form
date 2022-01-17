let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let showHide = document.querySelector(".showHide");
let submit = document.querySelector(".submit");
window.onload = () => {
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    password.value = "";
}
submit.onclick = (e) => {
        e.preventDefault();

        // checking first Name
        if (firstName.value.trim() == "") {
            error(firstName)
        } else if (firstName.value.trim().split("").filter(x => +x).length > 0) {
            notName(firstName)
        } else {
            validFor(firstName)
        }
        // checking last name 
        if (lastName.value.trim() == "") {
            error(lastName)
        } else if (lastName.value.trim().split("").filter(x => +x).length > 0) {
            notName(lastName)
        } else {
            validFor(lastName)
        }
        // checking email
        if (email.value.trim() == "") {
            error(email)
        } else if (!isEmail(email.value.trim())) {
            notEmail(email)
        } else {
            validFor(email)
        }
        // checking password 
        if (password.value.trim() == "") {
            error(password)
        } else if (password.value.trim().length < 8) {
            notPassword(password)
        } else {
            validFor(password)
        }
    }
    // error
function error(inputName) {
    inputName.style.borderColor = 'red';
    inputName.nextElementSibling.textContent = `${inputName.placeholder} Cannot Be Blank`;
    inputName.nextElementSibling.nextElementSibling.style.display = 'block';
    inputName.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'none';
}
// valid 
function validFor(inputName) {
    inputName.style.borderColor = 'green';
    inputName.nextElementSibling.textContent = "";
    inputName.nextElementSibling.nextElementSibling.style.display = 'none';
    inputName.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'block';
}
// not name
function notName(inputName) {
    inputName.style.borderColor = 'red';
    inputName.nextElementSibling.textContent = `This is not a name`;
    inputName.nextElementSibling.nextElementSibling.style.display = 'block';
    inputName.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'none';
}
// not email
function isEmail(inputName) {
    return /\S+@\S+\.\S+/.test(inputName);
}

function notEmail(inputName) {
    inputName.style.borderColor = 'red';
    inputName.nextElementSibling.textContent = `This is not an email`;
    inputName.nextElementSibling.nextElementSibling.style.display = 'block';
    inputName.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'none';
}
// not password
function notPassword(inputName) {
    inputName.style.borderColor = 'red';
    inputName.nextElementSibling.textContent = `Password should have at least 8 characters`;
    inputName.nextElementSibling.nextElementSibling.style.display = 'block';
    inputName.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'none';
}
// show or hide password
showHide.onclick = () => {
    if (password.type == 'password') {
        password.type = 'text';
        showHide.classList.remove("fa-eye");
        showHide.classList.add("fa-eye-slash");
    } else {
        password.type = 'password';
        showHide.classList.add("fa-eye");
        showHide.classList.remove("fa-eye-slash");
    }
}