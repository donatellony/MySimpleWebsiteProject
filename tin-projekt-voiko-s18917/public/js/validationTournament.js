const inputs = document.querySelectorAll("input:not(.form-button-submit)"),
    errors = document.querySelectorAll(".error-text"),
    mainErrorText = document.querySelector(".error-submit");

// resetErrors(inputs, errors, mainErrorText);

function validateForm() {
    let isValid = true;
    resetErrors(inputs, errors, mainErrorText);
    console.log(inputs[1])
    const results = [
        validateEmpty(inputs[1], errors[0]),
        validatePositiveNumber(inputs[2], errors[1]),
        validateEmpty(inputs[4], errors[3]),
        // validateEmpty(inputs[5], errors[4])
    ];
    console.log(results)
    results.forEach(e => {
            if (!e) {
                mainErrorText.innerText = "Formularz zawiera błędy";
                isValid = false;
            }
        }
    );
    return isValid;
}
