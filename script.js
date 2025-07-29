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
function changeLanguage() {
    const lang = document.getElementById('language-switcher').value;
    document.documentElement.lang = lang;

    // Update header p
    document.querySelector('header p').textContent = document.querySelector('header p').getAttribute('data-' + lang);

    // Update other elements (existing code)
    document.getElementById('about-title').textContent = document.querySelector('.about').getAttribute('data-' + lang);
    document.getElementById('about-text').textContent = document.getElementById('about-text').getAttribute('data-' + lang);
    document.getElementById('work-title').textContent = document.getElementById('work-title').getAttribute('data-' + lang);
    document.getElementById('contact-title').textContent = document.querySelector('.contact').getAttribute('data-' + lang);
    document.querySelector('form label[for="name"]').textContent = document.querySelector('label[for="name"]').getAttribute('data-' + lang);
    document.querySelector('form label[for="email"]').textContent = document.querySelector('label[for="email"]').getAttribute('data-' + lang);
    document.querySelector('form label[for="message"]').textContent = document.querySelector('label[for="message"]').getAttribute('data-' + lang);
    document.querySelector('form button').textContent = document.querySelector('button').getAttribute('data-' + lang);
    document.getElementById('footer-text').innerHTML = document.getElementById('footer-text').getAttribute('data-' + lang);
}
window.onload = function() {
    changeLanguage();
};