document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission to handle it manually with fetch

    const form = this;
    const formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert('Form submitted! We will get back to you soon.');
            form.reset(); // Clear form on success
        } else {
            alert('Error submitting the form. Please try again later.');
        }
    })
    .catch(error => {
        alert('An error occurred. Please try again later.');
    });
});