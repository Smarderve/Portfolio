//=============ELEMENTS=========

const hamburgerToogle = document.querySelector('.hamburger-toggle');
const navbarMenu = document.querySelector('.navbar-menu');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar-menu a');

//===============HAMBURGER TOOGLE================

hamburgerToogle.addEventListener('click', () => {
    hamburgerToogle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});

//============CLOSE NAV-MENU===========

document.addEventListener('click', (e) => {

    if (
        !hamburgerToogle.contains(e.target) &&
        !navbarMenu.contains(e.target)
    ) {
        hamburgerToogle.classList.remove('active');
        navbarMenu.classList.remove('active');
    }

});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburgerToogle.classList.remove('active');
        navbarMenu.classList.remove('active');
    });
});

//===============ACTIVE LINK ON SCROLL================

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - 150) {
            current = section.getAttribute('id');
        }

    });

    navLinks.forEach(link => {
        link.classList.remove('active');

        if (link.getAttribute('href') === `#${current}`){
            link.classList.add('active');
        }
    });
});