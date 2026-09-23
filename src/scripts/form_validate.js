const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(`Form submitted: ${nameInput.value} ${emailInput.value} ${messageInput.value}`);
});