const inputs = document.querySelectorAll("input:not(.form-button-submit)"),
    errors = document.querySelectorAll(".error-text"),
    mainErrorText = document.querySelector(".error-submit");

// resetErrors(inputs, errors, mainErrorText);

function validateForm() {
    let isValid = true;
    resetErrors(inputs, errors, mainErrorText);
    const results = [
        validateSelected(document.querySelectorAll('option:checked')[0], errors[0]),
        validateSelected(document.querySelectorAll('option:checked')[1], errors[1]),
        validatePositiveNumber(inputs[1], errors[2]),
        validatePositiveNumber(inputs[2], errors[3])
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
