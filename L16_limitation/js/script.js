'use strict';
console.log('hello world');
const eyes = document.querySelector('.block');
const input = document.querySelector('.textarea');
const message = document.querySelector('.message');
input.addEventListener('keydown', () => {
    eyes.classList.add('active');
    message.classList.remove('view');
})
input.addEventListener('keydown', debounce(() => {
    eyes.classList.remove('active');
    message.classList.add('view');
}, 2000));
input.addEventListener('focus', () => {
    eyes.classList.add('active');
})
input.addEventListener('blur', () => {
    eyes.classList.remove('active');
})


function debounce(callback, delay) {
    let timeout;
    return () => {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            timeout = null;
            callback();
        }, delay);
    };
};