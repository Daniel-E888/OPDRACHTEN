const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const minMessageLength = 10;
let isFormValid = false;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formInputValues = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };

  validateForm(formInputValues);
});

function validateForm(inputs) {
  if (
    inputs.name.trim() !== "" &&
    emailRegex.test(inputs.email) &&
    inputs.message.trim().length >= minMessageLength
  ) {
    clearError(nameInput);
    clearError(emailInput);
    clearError(messageInput);
    isFormValid = true;
    const successMessage = form.querySelector(".success-message");
    successMessage.textContent = "Formulier is succesvol ingediend!";
  } else {
    if (inputs.name.trim() === "") {
      setError(nameInput, "Naam is verplicht");
    } else {
        clearError(nameInput);
    }
    if (!emailRegex.test(inputs.email)) {
      setError(emailInput, "Voer een geldig e-mailadres in");
    } else {
        clearError(emailInput);
    }
    if (inputs.message.trim().length < minMessageLength) {
      setError(messageInput, `Bericht moet minimaal ${minMessageLength} tekens lang zijn`);
    } else {
        clearError(messageInput);
    }
    isFormValid = false;
  }
}

// if the input is invalid, set the error message and add the error class to the form control
function setError(input, message) {
  const formControl = input.parentElement;
  const errorMessage = formControl.querySelector(".error-message");
  errorMessage.textContent = message;
  formControl.classList.add("error");
}

// if the input is valid, clear the error message and remove the error class from the form control
function clearError(input) {
  const formControl = input.parentElement;
  const errorMessage = formControl.querySelector(".error-message");
  errorMessage.textContent = "";
  formControl.classList.remove("error");
}