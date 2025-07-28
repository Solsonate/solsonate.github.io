document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default to handle manually
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
            form.reset(); // Clear form
            window.location.href = '/index-thankyou.html'; // Redirect to thank-you page
        } else {
            alert('Error submitting the form. Please try again later.');
        }
    })
    .catch(error => {
        alert('An error occurred. Please try again later.');
    });
});