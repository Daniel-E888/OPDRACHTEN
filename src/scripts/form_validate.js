const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const minMessageLength = 10;
let isFormValid = false;

function isValidName(name) {
  return name.trim() !== "";
}

function isValidEmail(email) {
  return emailRegex.test(email);
}

function isValidMessage(message) {
  return message.trim().length >= minMessageLength;
}

function validateInput(inputs) {
    return {
            isValidName: isValidName(inputs.name),
            isValidEmail: isValidEmail(inputs.email),
            isValidMessage: isValidMessage(inputs.message)
    }
}

// if the input is invalid, set the error message and add the error class to the form control
function setError(input, message) {
  const formControl = input.parentElement;
  const errorMessage = formControl.querySelector(".error-message");
  errorMessage.textContent = message;
  formControl.classList.add("error");
  input.setAttribute("aria-invalid", "true");
}

// if the input is valid, clear the error message and remove the error class from the form control
function clearError(input) {
  const formControl = input.parentElement;
  const errorMessage = formControl.querySelector(".error-message");
  errorMessage.textContent = "";
  formControl.classList.remove("error");
  input.setAttribute("aria-invalid", "false");
}

function setSuccess() {
    const successMessage = form.querySelector(".success-message");
    successMessage.textContent = "Formulier is succesvol ingediend!";
}

function handleFormSubmit(e) {
  e.preventDefault();

  const formInputValues = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };

  const validation = validateForm(formInputValues);

  if (!validation.isValidName) {
    setError(nameInput, "Naam is verplicht.");
  } else {
    clearError(nameInput);
  }

  if (!validation.isValidEmail) {
    setError(emailInput, "Voer een geldig e-mailadres in.");
  } else {
    clearError(emailInput);
  }

  if (!validation.isValidMessage) {
    setError(messageInput, `Bericht moet minimaal ${minMessageLength} tekens lang zijn.`);
  } else {
    clearError(messageInput);
  }

  if (validation.isValidName && validation.isValidEmail && validation.isValidMessage) {
    setSuccess();
  }
}

form.addEventListener("submit", handleFormSubmit);