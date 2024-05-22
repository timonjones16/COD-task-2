document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.mailing-list form');
    const emailInput = form.querySelector('input[type="email"]');
    const subscribeButton = form.querySelector('button');
    const message = document.createElement('p');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = emailInput.value;
        if (validateEmail(email)) {
            message.textContent = 'Thanks for subscribing!';
            message.style.color = 'green';
            form.appendChild(message);
            emailInput.value = '';  // Clear the input field after submission
        } else {
            message.textContent = 'Please enter a valid email address.';
            message.style.color = 'red';
            form.appendChild(message);
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
