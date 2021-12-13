const hamburgerToggle = document.querySelector('.hamburger-toggle');
const navLinks = document.querySelector('.nav-links');

hamburgerToggle.addEventListener('click', () => {
    hamburgerToggle.classList.toggle('hamburger-toggle-rotate');
    navLinks.classList.toggle('show-links');
});