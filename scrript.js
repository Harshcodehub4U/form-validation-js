document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const cpassword = document.getElementById('cpassword').value;
    const messageElement = document.getElementById('message');

    // Reset message
    messageElement.textContent = '';

    // Email validation
    if (!email.includes('@')) {
        messageElement.textContent = 'Please enter a valid email address.';
        messageElement.style.color = 'red';
        return;
    }

    // Password validation
    if (password.length < 6) {
        messageElement.textContent = 'Password must be at least 6 characters long.';
        messageElement.style.color = 'red';
        return;
    }

    // Confirm password validation
    if (password !== cpassword) {
        messageElement.textContent = 'Passwords do not match.';
        messageElement.style.color = 'red';
        return;
    }

    // If all validations pass
    messageElement.textContent = 'Registration successful!';
    messageElement.style.color = 'green';
});
