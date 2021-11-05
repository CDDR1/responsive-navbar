const hamburgerToggle = document.querySelector('.hamburger-toggle');
const navLinksToggle = document.querySelector('.nav-links-toggle');

hamburgerToggle.addEventListener('click', () => {
    hamburgerToggle.classList.toggle('hamburger-toggle-rotate');
    navLinksToggle.classList.toggle('show-links');
});