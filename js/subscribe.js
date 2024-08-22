// Function to get URL parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Display the email address
const email = getQueryParam('email');
document.getElementById('email-display').textContent = `${email}`;

// Add event listener to the dismiss button
document.getElementById('dismiss-button').addEventListener('click', function() {
    window.location.href = 'index.html'; // Redirect to index.html
});