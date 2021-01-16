
function resetErrors(inputs, errorTexts, errorInfo){
    inputs.forEach(e=>e.classList.remove("error-input"));
    errorTexts.forEach(e => e.innerText = "");
    errorInfo.innerText = "";
}
function validateEmpty(input, error) {
    if (!input.value.trim()) {
        input.classList.add("error-input");
        error.innerText = "Pole jest wymagane";
        return false;
    }
    return true;
}
function validatePositiveNumber(numberInput, error) {
    const notEmpty = validateEmpty(numberInput, error);
    if (!notEmpty) {
        return false;
    }
    if (/-\d+/.test(numberInput.value)) {
        numberInput.classList.add("error-input");
        error.innerText = "W tym kontekście wartość nie może być ujemna";
        return false;
    }
    return true;
}
function validateEmail(emailInput, error) {
    const notEmpty = validateEmpty(emailInput, error);
    if (!notEmpty) {
        return false;
    }
    const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailValidator.test(emailInput.value)) {
        emailInput.classList.add("error-input");
        error.innerText = "Email jest niepoprawny";
        return false;
    }
    return true;
}

function validateSelected(selectedOption, error, selector){
    const result = selectedOption.value;
    if(!result) {
        selectedOption.classList.add("error-input");
        error.innerText = "Żadna opcja nie jest wybrana";
        return false;
    }
    return true;
}
