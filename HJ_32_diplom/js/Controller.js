'use strict';
console.log(`Hello World`);
const imageContainer = document.querySelector('.wrap.app');
const firstImage = imageContainer.querySelector('img.current-image');
const menubarItems = imageContainer.querySelectorAll('ul li');
const preloader = document.querySelector('.image-loader');
const formatError = document.querySelector('.error');

dragDrop();

class Controller {
    constructor(container = document.querySelector('.wrap.app')) {
        this.container = container;

        this.viewState = new ViewState(this.container, this);
        this.menubarMotion = new MovingElement(this.container.querySelector('.menu'));
        this.HTTP = new HTTP(this);
        this.WS = new WS(this);

        this.defaultStart();

        if (this.currentImage) {
            this.standartStart();
        };
    }
    //Управление панелью меню

    //Управление комментариями
    sendComment(data) {
        console.log('Controller -> sendComment');

        const link = 'https://neto-api.herokuapp.com/pic/' + JSON.parse(localStorage.currentImage).id + '/comments';
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        this.HTTP.send(data, link, headers).then((data) => {
            console.log(data);
        });
    }
    //Скрывает либо отображает комментарии
    showHideComments(value = false) {
        this.comments.viewHideFormAll(value);
    }
    //Возвратит текущее состояние меню
    get viewStateValue() {
        return this.viewState.menu;
    }
    //Возвратит текущее изображение на странице
    get currentImage() {
        console.log('get .current-image');
        let image = this.container.querySelector('img.current-image');
        if (image) {
            return image;
        } else if (this.hasImageInStorage()) {
            image = document.createElement('img');
            image.classList.add('current-image');
            image.src = JSON.parse(localStorage.currentImage).url;
            this.container.insertBefore(image, this.container.querySelector('.comments__form'));
            return this.container.querySelector('img.current-image');
        }
    }
    //Задаст стартовые параметры если изображение отсутствует
    defaultStart() {
        this.container.removeChild(this.container.querySelector('img.current-image'));
    }
    //Задаст стартовые параметры если данные в системе уже есть
    standartStart() {
        this.canvas = new DrawingMode(this.container, this);
        this.comments = new Comments(this.container, this);
    }
    //Проверяет есть ли данные об изображении в localStorage
    hasImageInStorage() {
        if (localStorage.currentImage) {
            return true;
        }
    }
    //Очистит localStorage
    clearStorage() {
        console.log('ClearStorage');
        localStorage.clear();
    }
}
const controller = new Controller();