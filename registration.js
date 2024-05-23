document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let firstName = document.getElementById('firstName').value.trim();
    let lastName = document.getElementById('lastName').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();
    let confirmPassword = document.getElementById('confirmPassword').value.trim();
    let gender = document.getElementById('gender').value;

    let errors = false;

    // Reset error messages
    document.querySelectorAll('.error').forEach(function(element) {
        element.textContent = '';
    });

    if (firstName === '') {
        document.getElementById('firstNameError').textContent = 'First name is required.';
        errors = true;
    }

    if (lastName === '') {
        document.getElementById('lastNameError').textContent = 'Last name is required.';
        errors = true;
    }

    if (email === '') {
        document.getElementById('emailError').textContent = 'Email address is required.';
        errors = true;
    }

    if (password === '') {
        document.getElementById('passwordError').textContent = 'Password is required.';
        errors = true;
    }

    if (confirmPassword === '') {
        document.getElementById('confirmPasswordError').textContent = 'Please confirm password.';
        errors = true;
    }

    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        errors = true;
    }

    if (gender === '') {
        document.getElementById('genderError').textContent = 'Please select gender.';
        errors = true;
    }

    if (!errors) {
        // If no errors, form submission can proceed
        document.getElementById('registrationForm').submit();
    }
});
