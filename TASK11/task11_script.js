document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        document.getElementById('nameError').textContent = '';
        document.getElementById('emailError').textContent = '';

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();

        if (name === '') {
            document.getElementById('nameError').textContent = 'Name is required';
        } else if (!isValidName(name)) {
            document.getElementById('nameError').textContent = 'Enter a valid name';
        }

        if (email === '') {
            document.getElementById('emailError').textContent = 'Email is required';
        } else if (!isValidEmail(email)) {
            document.getElementById('emailError').textContent = 'Enter a valid email address';
        } 
        
        if (isValidEmail(email) && isValidName(name)) {
            window.location.href = 'https://www.gmail.com';
        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidName(name) {
        const nameRegex = /^[a-zA-ZÀ-ÿ'-\s]+$/;
        return nameRegex.test(name);
    }
});
