import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = Number(event.target.elements.delay.value);
  const state = event.target.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(`Fulfilled promise in ${delay}ms`);
      } else {
        reject(`Rejected promise in ${delay}ms`);
      }
    }, delay);
  });

  promise
    .then(value =>
      iziToast.show({
        title: '✅',
        messageColor: '#fff',
        backgroundColor: '#59a10d',
        position: 'topRight',
        message: value,
      })
    )
    .catch(error =>
      iziToast.show({
        title: '❌',
        messageColor: '#fff',
        backgroundColor: '#ef4040',
        position: 'topRight',
        message: error,
      })
    );

  form.reset();
});
