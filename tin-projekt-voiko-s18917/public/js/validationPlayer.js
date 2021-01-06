//
// import {validateEmpty, resetErrors, validatePositiveNumber, validateEmail} from "./validationCommon";

const inputs = document.querySelectorAll("input:not(.form-button-submit)"),
    errors = document.querySelectorAll(".error-text"),
    mainErrorText = document.querySelector(".error-submit"),
    submitBtn = document.querySelector('.form-button-submit');
console.log(inputs);
resetErrors(inputs, errors, mainErrorText);

function validatePseudonim(pseudonimInput, error) {
    const isEmpty = validateEmpty(pseudonimInput, error);
    if (isEmpty) {
        return false;
    }
    if (!/\w{3,20}/.test(pseudonimInput.value)) {
        error.innerText = "Pseudonim powinien składać się z 3-20 znaków,\n tylko liter lacińskiego alfabetu, cyfr i znaku '_'";
        return false;
    }
    error.innerText = "";
    return true;
}
function validateForm() {
    resetErrors(inputs, errors, mainErrorText);
    const results = [
        validatePseudonim(inputs[0], errors[0]),
        validatePositiveNumber(inputs[1], errors[1]),
        validatePositiveNumber(inputs[2], errors[2]),
        validateEmail(inputs[3], errors[3])
    ];
    results.forEach(e => {
            if (!e) {
                mainErrorText.innerText = "Formularz zawiera błędy";
                return false;
            }
        }
    );
    return true;
}
