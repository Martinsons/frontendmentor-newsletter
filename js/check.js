// Get the email input element
const emailInput = document.getElementById('email');

// Get the form element
const form = document.getElementById('subscribed');

// Add an event listener to the form's submit event
form.addEventListener('submit', (e) => {
    // Prevent the form from submitting
    e.preventDefault();

    // Get the value of the email input
    const email = emailInput.value.trim();

    // Check if the email is empty
    if (email === '') {
        // Add a red border to the email input
        emailInput.style.borderColor = 'red';

        // Display an error message
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Please input your email';
        errorMessage.style.color = 'red';
        form.appendChild(errorMessage);
    } else {
        // Clear any previous error messages and reset the border color
        emailInput.style.borderColor = '';
        const errorMessages = form.querySelectorAll('p');
        errorMessages.forEach((errorMessage) => {
            errorMessage.remove();
        });

        // Submit the form
        form.submit();
    }
});