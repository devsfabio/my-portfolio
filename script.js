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
// validacao formulario

const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nome = document.querySelector("[name='nome']").value;
  const email = document.querySelector("[name='email']").value;
  const mensagem = document.querySelector("[name='mensagem']").value;

  const texto = `📌 *Nova mensagem do portfólio!*\n\n👤 *Nome:* ${nome}\n📧 *E-mail:* ${
    email || 'Não informado'
  }\n💬 *Mensagem:* ${mensagem}`;

  const url = `https://wa.me/5511983647344?text=${encodeURIComponent(texto)}`;

  window.open(url, '_blank');

  form.reset();
  alert('Obrigado! Você será redirecionado ao WhatsApp.');

  nameValidate();
  emailValidate();
});

function setError(index) {
  campos[index].style.border = '2px solid #e63636';
  spans[index].style.display = 'block';
}
function removeError(index) {
  campos[index].style.border = '';
  spans[index].style.display = 'none';
}

function nameValidate() {
  if (campos[0].value.length < 3) {
    setError(0);
  } else {
    removeError(0);
  }
}

function emailValidate() {
  if (!emailRegex.test(campos[1].value)) {
    setError(1);
  } else {
    removeError(1);
  }
}
