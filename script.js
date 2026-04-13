const root = document.documentElement;

window.addEventListener('mousemove', (event) => {
  const x = (event.clientX / window.innerWidth) * 100;
  const y = (event.clientY / window.innerHeight) * 100;
  root.style.setProperty('--mouse-x', `${x}%`);
  root.style.setProperty('--mouse-y', `${y}%`);
});

const hero = document.querySelector('.hero');
if (hero) {
  hero.addEventListener('mouseenter', () => hero.classList.add('hero-active'));
  hero.addEventListener('mouseleave', () => hero.classList.remove('hero-active'));
}

const form = document.getElementById('application-form');
const messageBox = document.getElementById('form-message');

if (form && messageBox) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.hidden = true;
    messageBox.hidden = false;
  });
}
