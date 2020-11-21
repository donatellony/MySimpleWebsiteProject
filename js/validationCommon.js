"use strict";

function resetErrors(inputs, errorTexts, errorInfo){
    inputs.forEach(e=>e.classList.remove("error_input"));
    errorTexts.forEach(e => e.innerText = "");
    errorInfo.innerText = "";
}

