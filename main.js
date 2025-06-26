submitBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    validateEmail(emailInput.value);
});

let validateEmail = (emailValue)=>{
    let expReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    if (expReg.test(emailValue) == true) {
        emailInput.style.border = "1px solid rgb(173, 141, 0)";
        emailInput.value = "";
        success.style.display = "block";
        error.style.display = "none";
    } else {
        emailInput.style.border = "1px solid red";
        error.style.display = "block";
        success.style.display = "none";
    }
}