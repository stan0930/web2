document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Form validation
        if (validateForm()) {
            // If validation passes, submit the form data
            // For demonstration, we'll just alert the data and redirect
            window.location.href = 'thankyou.html'; // Redirect to thankyou.html
        }
    });

    function validateForm() {
        const firstname = document.getElementById('firstname').value;
        const lastname = document.getElementById('lastname').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Simple validation checks
        if (!firstname || !lastname || !email || !password || !confirmPassword) {
            alert('Please fill in all fields.');
            return false;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return false;
        }

        // Add more validation checks as needed

        return true; // Return true if all validations pass
    }
});