const inputs = document.querySelectorAll("input:not(.form-button-submit)"),
      errors = document.querySelectorAll(".error-text"),
      mainErrorText = document.querySelector(".error-submit"),
      submitBtn = document.querySelector('.form-button-submit');
console.log(inputs);
resetErrors(inputs, errors, mainErrorText);

function validateEmpty(input, error){
    if(!input.value.trim()){
        error.innerText = "Pole jest wymagane";
        return true;
    }
    return false;
}

function validatePseudonim(pseudonimInput, error){
    const isEmpty = validateEmpty(pseudonimInput, error);
    if(isEmpty){
        return false;
    }
    if(!/\w{3,20}/.test(pseudonimInput.value)){
        error.innerText = "Pseudonim powinien składać się z 3-20 znaków,\n tylko liter lacińskiego alfabetu, cyfr i znaku '_'";
        return false;
    }
    error.innerText="";
    return true;
}

function validateNumbers(numberInput, error){
    const isEmpty = validateEmpty(numberInput, error);
    if(isEmpty){
        return false;
    }
    if(/-\d+/.test(numberInput.value)){
        error.innerText = "W tym kontekście wartość nie może być ujemna";
        return false;
    }
    return true;
}

function validateEmail(emailInput, error){
    const isEmpty = validateEmpty(emailInput, error);
    if(isEmpty){
        return false;
    }
    const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!emailValidator.test(emailInput.value)){
        error.innerText = "Email jest niepoprawny";
        return false;
    }
    return true;
}

submitBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    resetErrors(inputs, errors, mainErrorText);
    const results = [
        validatePseudonim(inputs[0], errors[0]),
        validateNumbers(inputs[1],errors[1]),
        validateNumbers(inputs[2],errors[2]),
        validateEmail(inputs[3],errors[3])
    ];
    results.forEach(e=>{
        if(!e){
            mainErrorText.innerText="Formularz zawiera błędy";
            console.log(event.target);
            // event.target.disabled = true;
        }
    });
});