import {maxFund, minFund} from "../../model/sequelize/Tournament";

const inputs = document.querySelectorAll("input:not(.form-button-submit)"),
    errors = document.querySelectorAll(".error-text"),
    mainErrorText = document.querySelector(".error-submit");

// resetErrors(inputs, errors, mainErrorText);

function validateEndDate(startDateInput, endDateInput, endDateError) {
    if (endDateInput.value === '')
        return true;
    const startDate = new Date(startDateInput.value).getTime();
    const endDate = new Date(endDateInput.value).getTime();
    if (endDate - startDate < 0) {
        endDateError.innerText = 'Data okończenia tuenieju jest wcześniejsza od rozpoczęcia';
        return false;
    }
    return true;
}

function validateForm() {
    let isValid = true;
    resetErrors(inputs, errors, mainErrorText);
    const results = [
        validateEmpty(inputs[1], errors[0]),
        validatePositiveNumber(inputs[2], errors[1], minFund, maxFund),
        validateEmpty(inputs[4], errors[3]),
        validateEndDate(inputs[4], inputs[5], errors[4])
        // validateEmpty(inputs[5], errors[4])
    ];
    // console.log(results)
    results.forEach(e => {
            if (!e) {
                mainErrorText.innerText = "Formularz zawiera błędy";
                isValid = false;
            }
        }
    );
    return isValid;
}
