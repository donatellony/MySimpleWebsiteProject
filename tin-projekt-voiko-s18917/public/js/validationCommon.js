
function resetErrors(inputs, errorTexts, errorInfo){
    inputs.forEach(e=>e.classList.remove("error_input"));
    errorTexts.forEach(e => e.innerText = "");
    errorInfo.innerText = "";
}
function validateEmpty(input, error) {
    if (!input.value.trim()) {
        error.innerText = "Pole jest wymagane";
        return true;
    }
    return false;
}
function validatePositiveNumber(numberInput, error) {
    const isEmpty = validateEmpty(numberInput, error);
    if (isEmpty) {
        return false;
    }
    if (/-\d+/.test(numberInput.value)) {
        error.innerText = "W tym kontekście wartość nie może być ujemna";
        return false;
    }
    return true;
}
function validateEmail(emailInput, error) {
    const isEmpty = validateEmpty(emailInput, error);
    if (isEmpty) {
        return false;
    }
    const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailValidator.test(emailInput.value)) {
        error.innerText = "Email jest niepoprawny";
        return false;
    }
    return true;
}
