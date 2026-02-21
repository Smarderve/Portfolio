const hamburgerToogle = document.querySelector('.hamburger-toogle');
const navbarMenu = document.querySelector('.navbar-menu');

hamburgerToogle.addEventListener('click', () => {
    hamburgerToogle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});