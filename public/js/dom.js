const selector = query => document.querySelector(query);
const input = selector('.main__input');
const form = selector('.main__form');
const span = selector('.main__span');
form.addEventListener('input', e => {
  if (!input.value) {
    span.textContent = 'This Filed Is Required Honey';
    e.preventDefault();
  } else span.textContent = '';
});
