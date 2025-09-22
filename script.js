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
    localStorage.setItem('selectedLang', lang);
    document.documentElement.lang = lang;

    // Update all elements with data-en and data-es
    document.querySelectorAll('[data-en][data-es]').forEach(function(el) {
        // Use innerHTML for <p> and footer <p> (with HTML formatting)
        if (
            el.tagName === 'P' ||
            (el.id === 'footer-text')
        ) {
            el.innerHTML = el.getAttribute('data-' + lang);
        } else {
            // Use textContent for <h1>, <h2>, <h3>, <a>, etc.
            el.textContent = el.getAttribute('data-' + lang);
        }
    });
}

    // Header description
    const headerP = document.querySelector('header .text-content p');
    if (headerP && headerP.hasAttribute('data-' + lang)) {
        headerP.textContent = headerP.getAttribute('data-' + lang);
    }

    // Product descriptions (for products.html)
    document.querySelectorAll('.product-item p[data-en][data-es]').forEach(function(p) {
        // Use innerHTML to preserve formatting
        p.innerHTML = p.getAttribute('data-' + lang);
    });

    // Product names (for products.html)
    document.querySelectorAll('.product-item h3[data-en][data-es]').forEach(function(h3) {
        h3.textContent = h3.getAttribute('data-' + lang);
    });

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
    }

    // Update navigation links in the footer (and anywhere else)
    document.querySelectorAll('nav.main-nav a[data-en][data-es]').forEach(function(link) {
        link.textContent = link.getAttribute('data-' + lang);
    });
}

window.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('selectedLang') || 'en';
    const switcher = document.getElementById('language-switcher');
    if (switcher) {
        switcher.value = savedLang;
        switcher.addEventListener('change', changeLanguage);
    }
    changeLanguage();
});

