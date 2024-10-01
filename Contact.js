// JavaScript for resizing the map
const mapContainer = document.querySelector('.map-container');
const resizeHandle = document.querySelector('.resize-handle');

resizeHandle.addEventListener('mousedown', (e) => {
    e.preventDefault();

    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = parseInt(window.getComputedStyle(mapContainer).width, 10);
    const startHeight = parseInt(window.getComputedStyle(mapContainer).height, 10);

    function onMouseMove(e) {
        mapContainer.style.width = `${startWidth + e.clientX - startX}px`;
        mapContainer.style.height = `${startHeight + e.clientY - startY}px`;
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});








/*checking the field is correctly filled or not?*/
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS (if you're using EmailJS, replace 'YOUR_USER_ID' with your actual User ID)
    // emailjs.init('YOUR_USER_ID');

    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        // Prevent default form submission
        event.preventDefault();

        // Get form elements
        const name = form.querySelector('input[name="name"]').value.trim();
        const email = form.querySelector('input[name="email"]').value.trim();
        const phone = form.querySelector('input[name="phone"]').value.trim();
        const message = form.querySelector('textarea[name="message"]').value.trim();

        // Validate form fields
        let isValid = true;
        let errorMessage = '';

        if (name === '') {
            isValid = false;
            errorMessage += 'Your Name is required.\n';
        }

        if (email === '') {
            isValid = false;
            errorMessage += 'Your Email is required.\n';
        } else if (!validateEmail(email)) {
            isValid = false;
            errorMessage += 'Please enter a valid email address.\n';
        }

        if (message === '') {
            isValid = false;
            errorMessage += 'Message is required.\n';
        }

        // If form is not valid, show alert and return
        if (!isValid) {
            alert(errorMessage);
            return;
        }

        // If form is valid, submit the form
        form.submit(); // If using Web3Forms, this will handle the submission to the specified endpoint
    });

    // Email validation function
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});
