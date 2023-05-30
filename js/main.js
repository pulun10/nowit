// nav toggle
const btnNav = document.querySelector('.btn-nav');
const nav = document.querySelector('nav');
btnNav.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
});