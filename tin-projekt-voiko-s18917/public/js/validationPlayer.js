//
// import {validateEmpty, resetErrors, validatePositiveNumber, validateEmail} from "./validationCommon";

const inputs = document.querySelectorAll("input:not(.form-button-submit)"),
    errors = document.querySelectorAll(".error-text"),
    mainErrorText = document.querySelector(".error-submit");
// selectedOptions = document.querySelectorAll('option:checked');
// console.log(inputs);
// resetErrors(inputs, errors, mainErrorText);

function validatePseudonim(pseudonimInput, error) {
    const notEmpty = validateEmpty(pseudonimInput, error);
    if (!notEmpty) {
        return false;
    }
    if (!/\w{3,20}/.test(pseudonimInput.value)) {
        error.innerText = "Pseudonim powinien składać się z 3-20 znaków,\n tylko liter lacińskiego alfabetu, cyfr i znaku '_'";
        pseudonimInput.classList.add("error-input");
        return false;
    }
    error.innerText = "";
    return true;
}

function validateForm() {
    let isValid = true;
    resetErrors(inputs, errors, mainErrorText);
    const results = [
        validatePseudonim(inputs[1], errors[0]),
        validatePositiveNumber(inputs[2], errors[1]),
        validatePositiveNumber(inputs[3], errors[2]),
        validateEmail(inputs[4], errors[3]),
        validateSelected(document.querySelectorAll('option:checked')[0], errors[4])
    ];
    results.forEach(e => {
            if (!e) {
                mainErrorText.innerText = "Formularz zawiera błędy";
                isValid = false;
            }
        }
    );
    return isValid;
}
