// const participationData = require('../../model/sequelize/Participation')

const inputs = document.querySelectorAll("input:not(.form-button-submit)"),
    errors = document.querySelectorAll(".error-text"),
    mainErrorText = document.querySelector(".error-submit"),
    selects = document.querySelectorAll('select');

// resetErrors(inputs, errors, mainErrorText);

function validateForm() {
    let isValid = true;
    resetErrors(inputs, errors, mainErrorText, selects);
    const results = [
        validateSelected(document.querySelectorAll('option:checked')[0], errors[0], selects[0]),
        validateSelected(document.querySelectorAll('option:checked')[1], errors[1], selects[1]),
        validatePositiveNumber(inputs[1], errors[2],1, 200, false),
        validatePositiveNumber(inputs[2], errors[3], 0, 100000, false)
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
