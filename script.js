document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default to handle manually
    const form = this;
    const formData = new FormData(form);fetch(form.action, {
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
});});function changeLanguage() {
    const lang = document.getElementById('language-switcher').value;
    document.documentElement.lang = lang;// Header description
const headerP = document.querySelector('header .text-content p');
if (headerP && headerP.hasAttribute('data-' + lang)) {
    headerP.textContent = headerP.getAttribute('data-' + lang);
}

// About section
const about = document.querySelector('.about');
const aboutTitle = document.getElementById('about-title');
if (about && aboutTitle && about.hasAttribute('data-' + lang)) {
    aboutTitle.textContent = about.getAttribute('data-' + lang);
}
const aboutText = document.getElementById('about-text');
if (aboutText && aboutText.hasAttribute('data-' + lang)) {
    aboutText.textContent = aboutText.getAttribute('data-' + lang);
}

// Work section
const workTitle = document.getElementById('work-title');
if (workTitle && workTitle.hasAttribute('data-' + lang)) {
    workTitle.textContent = workTitle.getAttribute('data-' + lang);
}

// Contact section
const contact = document.querySelector('.contact');
const contactTitle = document.getElementById('contact-title');
if (contact && contactTitle && contact.hasAttribute('data-' + lang)) {
    contactTitle.textContent = contact.getAttribute('data-' + lang);
}

// Form labels and button
const nameLabel = document.querySelector('form label[for="name"]');
if (nameLabel && nameLabel.hasAttribute('data-' + lang)) {
    nameLabel.textContent = nameLabel.getAttribute('data-' + lang);
}
const emailLabel = document.querySelector('form label[for="email"]');
if (emailLabel && emailLabel.hasAttribute('data-' + lang)) {
    emailLabel.textContent = emailLabel.getAttribute('data-' + lang);
}
const messageLabel = document.querySelector('form label[for="message"]');
if (messageLabel && messageLabel.hasAttribute('data-' + lang)) {
    messageLabel.textContent = messageLabel.getAttribute('data-' + lang);
}
const formButton = document.querySelector('form button');
if (formButton && formButton.hasAttribute('data-' + lang)) {
    formButton.textContent = formButton.getAttribute('data-' + lang);
}

// Thank you section (for thank-you page)
const thankYouDiv = document.querySelector('.thank-you');
const thankYouTitle = document.getElementById('thank-you-title');
if (thankYouDiv && thankYouTitle && thankYouDiv.hasAttribute('data-' + lang)) {
    thankYouTitle.textContent = thankYouDiv.getAttribute('data-' + lang);
}
const thankYouText = document.getElementById('thank-you-text');
if (thankYouText && thankYouText.hasAttribute('data-' + lang)) {
    thankYouText.textContent = thankYouText.getAttribute('data-' + lang);
}

// Back to Home link (thank-you page)
const backHomeLink = document.querySelector('a[data-en][data-es]');
if (backHomeLink && backHomeLink.hasAttribute('data-' + lang)) {
    backHomeLink.textContent = backHomeLink.getAttribute('data-' + lang);
}

// Footer
const footerText = document.getElementById('footer-text');
if (footerText && footerText.hasAttribute('data-' + lang)) {
    footerText.innerHTML = footerText.getAttribute('data-' + lang);
}}// Set initial language to English
window.onload = function() {
    changeLanguage();
};

