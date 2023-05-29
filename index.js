const btn = document.querySelector('.hero__btn');
const modal = document.querySelector('.modal');

btn.addEventListener('click', () => {
    modal.classList.add('modal_open');
});

modal.addEventListener('click', (event) => {
    if (event.target === modal || event.target.closest('.modal__close')) {
        modal.classList.remove('modal_open');
    }
});