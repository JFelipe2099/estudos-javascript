const btn = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const x = document.querySelector('.popup-close');

btn.addEventListener('click', () => {
    popup.style.display = 'block';
});

x.addEventListener('click', () => {
    popup.style.display = 'none';
});

popup.addEventListener('click', () => {
    popup.style.display = 'none';
});