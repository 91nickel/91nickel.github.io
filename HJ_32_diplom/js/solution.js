'use strict';
console.log(`Hello World`);
const imageContainer = document.querySelector('.wrap.app');
const firstImage = imageContainer.querySelector('.current-image');
const menubarItems = imageContainer.querySelectorAll('ul li');
const commentForm = imageContainer.querySelector('form');
const preloader = document.querySelector('.image-loader');
start();
dragDrop();

function dragDrop() {
    document.addEventListener('dragover', (e) => {
        e.preventDefault();
    });
    document.addEventListener('drop', (e) => {
        e.preventDefault();
        let file = e.dataTransfer.files[0];
        console.log(file);
        const imageTypeRegExp = /^image\//;

        try {
            if (!imageTypeRegExp.test(file.type)) {
                throw ('Ошибка типа файла!');
            }
            console.log('Файл прошел проверку');
        } catch (e) {
            file = null;
            console.log(e);
        }

        if (file) {
            const img = document.createElement('img');
            addClass('current-image', img);
            img.src = URL.createObjectURL(file);
            imageContainer.appendChild(img);
            menubarItems.forEach(el => {
                el.classList.display = 'inherit';
            })
            const request = sendFile(file).then((request) => {
                console.log(request);
            });
        }
    });
}

function start() {
    imageContainer.removeChild(firstImage);

    if (!imageContainer.querySelector('img')) {
        console.log(`Загрузка по умолчанию`);
        menubarItems.forEach((el, i) => {
            //console.log(i);
            if (i < 3) {
                return
            };
            //console.log(el);
            el.style.display = 'none';
        })
    }
}

function sendFile(file) {
    return new Promise(function (resolve, reject) {

        const xhr = new XMLHttpRequest();
        xhr.open(
            "POST",
            "https://neto-api.herokuapp.com/pic",
            true
        );
        xhr.setRequestHeader('Content-type', 'multipart/formdata');
        const form = new FormData();
        form.append('title', 'Image from 91nickel')
        form.append('image', file);
        xhr.send(form);

        xhr.addEventListener('loadstart', onLoadStart);

        xhr.addEventListener('load', () => {
            preloader.style.display = 'none';
            //console.log(xhr.responseText);
            resolve(xhr.responseText);
        });

        function onLoadStart() {
            preloader.style.display = 'inherit';
        }
    });

}

const addClass = (className, context) => context.classList.add(className),
    removeClass = (className, context) => context.classList.remove(className),
    hasClass = (className, context) => context.classList.contains(className);