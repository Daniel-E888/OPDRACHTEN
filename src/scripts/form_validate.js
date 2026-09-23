const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const minMessageLength = 10;

function isValidName(name) {
  return name.trim() !== "";
}

function isValidEmail(email) {
  return emailRegex.test(email);
}

function isValidMessage(message) {
  return message.trim().length >= minMessageLength;
}

function validateForm(inputs) {
  return {
    isValidName: isValidName(inputs.name),
    isValidEmail: isValidEmail(inputs.email),
    isValidMessage: isValidMessage(inputs.message),
  };
}

function setError(input, message) {
  const formControl = input.parentElement;
  const errorMessage = formControl.querySelector(".error-message");
  errorMessage.textContent = message;
  formControl.classList.add("error");
  input.setAttribute("aria-invalid", "true");
}

function clearError(input) {
  const formControl = input.parentElement;
  const errorMessage = formControl.querySelector(".error-message");
  errorMessage.textContent = "";
  formControl.classList.remove("error");
  input.setAttribute("aria-invalid", "false");
}

function validateField(input, isValid, errorMessage) {
  if (!isValid) {
    setError(input, errorMessage);
    return false;
  }
  clearError(input);
  return true;
}

function clearSuccess() {
  const successMessage = form.querySelector(".success-message");
  successMessage.textContent = "";
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

  const validName = validateField(nameInput, validation.isValidName, "Naam is verplicht.");
  const validEmail = validateField(emailInput, validation.isValidEmail, "Voer een geldig e-mailadres in.");
  const validMessage = validateField(
    messageInput,
    validation.isValidMessage,
    `Bericht moet minimaal ${minMessageLength} tekens lang zijn.`
  );

  if (validName && validEmail && validMessage) {
    setSuccess();
  } else {
    clearSuccess();
  }
}

form.addEventListener("submit", handleFormSubmit);