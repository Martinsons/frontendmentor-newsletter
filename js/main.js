
// First event listener
document.getElementById('subscribed').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const email = document.getElementById('email').value; // Get the email value

    // Check if the email is valid (simple validation example)
    if (email) {
        // Redirect with email as URL parameter
        window.location.href = `subscribed.html?email=${encodeURIComponent(email)}`;
    } else {
        // Add red border to email field
        document.getElementById('email').style.borderColor = 'red';
        // Add text to prompt user to input email
        document.getElementById('email').placeholder = 'Please input your email';
    }
});
