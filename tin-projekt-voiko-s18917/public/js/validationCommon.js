function resetErrors(inputs, errorTexts, errorInfo, selects) {
    inputs.forEach(e => e.classList.remove("error-input"));
    if (selects)
        selects.forEach(e => e.classList.remove("error-input"));
    errorTexts.forEach(e => e.innerText = "");
    errorInfo.innerText = "";
}

function checkTextLengthRange(value, min, max) {
    if (!value) {
        return false;
    }
    value = value.toString().trim();
    const length = value.length;
    if (max && length > max) {
        return false;
    }
    if (min && length < min) {
        return false;
    }
    return true;
}

function checkNumber(value) {
    if (!value) {
        return false;
    }
    if (isNaN(value)) {
        return false;
    }
    return true;
}

function checkNumberRange(value, min, max) {
    if (!value) {
        return false;
    }
    if (isNaN(value)) {
        return false;
    }
    value = parseFloat(value);
    if (value < min) {
        return false;
    }
    if (value > max) {
        return false;
    }
    return true;
}

function checkDateIfAfter(value, compareTo) {
    if (!value) {
        return false;
    }
    if (!compareTo) {
        return false;
    }
    const pattern = /(\d{4})-(\d{2})-(\d{2})/;
    if (!pattern.test(value)) {
        return false;
    }
    if (!pattern.test(compareTo)) {
        return false;
    }
    const valueDate = new Date(value);
    const compareToDate = new Date(compareTo);
    if (valueDate.getTime() < compareToDate.getTime()) {
        return false;
    }
    return true;
}

function validateEmpty(input, error) {
    if (!input.value.trim()) {
        input.classList.add("error-input");
        error.innerText = "Pole jest wymagane";
        return false;
    }
    return true;
}

function validatePositiveNumber(numberInput, error, min = -1, max = -1, required = true) {
    if (required) {
        const notEmpty = validateEmpty(numberInput, error);
        if (!notEmpty) {
            return false;
        }
    }
    const empty = numberInput.value === '';
    if (!empty) {
        if (/-\d+/.test(numberInput.value)) {
            numberInput.classList.add("error-input");
            error.innerText = "W tym kontekście wartość nie może być ujemna";
            return false;
        }
        if (min > -1 && max > -1) {
            if (!checkNumberRange(numberInput.value, min, max)) {
                numberInput.classList.add("error-input");
                error.innerText = `Wartość pola powinna być od ${min} do ${max}`;
                return false;
            }
        }
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

function validateSelected(selectedOption, error, select) {
    const result = selectedOption.value;
    if (!result) {
        select.classList.add("error-input");
        error.innerText = "Żadna opcja nie jest wybrana";
        return false;
    }
    return true;
}
