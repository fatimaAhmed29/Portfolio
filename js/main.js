
"use strict"


// contact
let yourName = document.getElementById("yourName")
let Email = document.getElementById("Email")
let alertName = document.getElementById("alertName")
let alertEmail = document.getElementById("alertEmail")

function valideyourName() {
    let regax =/^[a-zA-Z\s]{3,20}$/;
    if (regax.test(yourName.value) == true) {
        yourName.classList.add("is-valid")
        yourName.classList.remove("is-invalid")
        alertName.classList.replace("d-block", "d-none")
    } else {
        yourName.classList.add("is-invalid")
        yourName.classList.remove("is-valid")
        alertName.classList.replace("d-none", "d-block")
    }
}
yourName.addEventListener("blur", valideyourName)




function valideEmail() {
    let regax = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regax.test(Email.value) == true) {
        Email.classList.add("is-valid")
        Email.classList.remove("is-invalid")
        alertEmail.classList.replace("d-block", "d-none")
    } else {
        Email.classList.add("is-invalid")
        Email.classList.remove("is-valid")
        alertEmail.classList.replace("d-none", "d-block")
    }
}
Email.addEventListener("blur", valideEmail)



document.getElementById("contact-form").addEventListener("submit", function(event) {
    setTimeout(() => {
        event.target.reset(); 
    }, 500); 
});


