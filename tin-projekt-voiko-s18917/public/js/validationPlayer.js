//
import {minRating, maxRating, minCoins, maxCoins} from "../../model/sequelize/Player";

const inputs = document.querySelectorAll("input:not(.form-button-submit)"),
    errors = document.querySelectorAll(".error-text"),
    mainErrorText = document.querySelector(".error-submit"),
    selects = document.querySelectorAll('select');
// selectedOptions = document.querySelectorAll('option:checked');
// console.log(inputs);
// resetErrors(inputs, errors, mainErrorText);

function validatePseudonim(pseudonimInput, error) {
    const notEmpty = validateEmpty(pseudonimInput, error);
    if (!notEmpty) {
        return false;
    }
    if (!/\w+/.test(pseudonimInput.value) || !checkTextLengthRange(pseudonimInput.value, 3, 20)) {
        error.innerText = "Pseudonim powinien składać się z 3-20 znaków,\n tylko liter lacińskiego alfabetu, cyfr i znaku '_'";
        pseudonimInput.classList.add("error-input");
        return false;
    }
    error.innerText = "";
    return true;
}

function validateForm() {
    let isValid = true;
    resetErrors(inputs, errors, mainErrorText, selects);
    const results = [
        validatePseudonim(inputs[1], errors[0]),
        validatePositiveNumber(inputs[2], errors[1],minRating,maxRating),
        validatePositiveNumber(inputs[3], errors[2], minCoins, maxCoins),
        validateEmail(inputs[4], errors[3]),
        validateSelected(document.querySelectorAll('option:checked')[0], errors[4], selects[0])
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
