const input = document.querySelector('.main__input');
const btn = document.querySelector('.main__button');
console.log(btn);
btn.addEventListener('click', e => {
  if (!input.checkValidity) {
    alert('Fill In The Form Honey');
  }
});
