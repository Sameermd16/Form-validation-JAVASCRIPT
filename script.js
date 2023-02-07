const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");


form.addEventListener("submit", e => {
    e.preventDefault();
    inputChecks();
})

function inputChecks() {

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if (usernameValue === ""){
        error(username, "Username cannot be empty")
    }else {
        success(username);
    }
    
}


function error(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.classList.add("error");
    // formControl.className = "form-control error";
    small.innerText = message;
}
function success(input){
    const formControl = input.parentElement;
    formControl.classList.add("success");
    // formControl.className = "form-control success";
}

function isValid(parameter){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}