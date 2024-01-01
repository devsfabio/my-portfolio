let btnMenu = document.getElementById('btn-menu');
let menuMobile = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', () => {
  menuMobile.classList.add('menu-ativado');
});

menuMobile.addEventListener('click', () => {
  menuMobile.classList.remove('menu-ativado');
});

overlay.addEventListener('click', () => {
  menuMobile.classList.remove('menu-ativado');
});
