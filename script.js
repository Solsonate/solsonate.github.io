document.getElementById('contact-form').addEventListener('submit', function(event) {
    ; // Prevent default form submission
    alert('Form submitted! We will get back to you soon.');
    this.reset(); // Clear form
});