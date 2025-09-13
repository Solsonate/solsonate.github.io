// This file contains JavaScript functionality for the website, including the language switcher logic.

function changeLanguage() {
    const languageSwitcher = document.getElementById('language-switcher');
    const selectedLanguage = languageSwitcher.value;

    // Update header description
    const headerDesc = document.getElementById('header-desc');
    headerDesc.textContent = headerDesc.getAttribute(`data-${selectedLanguage}`);

    // Update about section
    const aboutTitle = document.getElementById('about-title');
    const aboutText = document.getElementById('about-text');
    aboutTitle.textContent = aboutTitle.getAttribute(`data-${selectedLanguage}`);
    aboutText.textContent = aboutText.getAttribute(`data-${selectedLanguage}`);

    // Update work section
    const workTitle = document.getElementById('work-title');
    workTitle.textContent = workTitle.getAttribute(`data-${selectedLanguage}`);

    // Update contact section
    const contactTitle = document.getElementById('contact-title');
    contactTitle.textContent = contactTitle.getAttribute(`data-${selectedLanguage}`);

    // Update footer text
    const footerText = document.getElementById('footer-text');
    footerText.innerHTML = footerText.getAttribute(`data-${selectedLanguage}`);
}