const input = document.querySelector('.main__input');
const form = document.querySelector('.main__form');
const span = document.querySelector('.main__span');

input.value = '';
form.addEventListener('input', e => {
  if (!input.value) {
    span.textContent = 'This Filed Is Required Honey';
    e.preventDefault();
  } else span.textContent = '';
});
