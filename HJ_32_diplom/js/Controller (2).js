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
        this.comments = new Comments(this.container, this);
        this.canvas = new DrawingMode(this.container, this);
        this.defaultStart();
        if (this.currentImage) {
            this.standartStart();
        };
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
    //Управление canvas и масками
    //Отправит содержимое canvas на сервер
    sendCanvas() {
        console.log('Controller -> sendCanvas()');
        let data = this.canvas.canvasImage;
        data.toBlob(blob => {
            console.log(blob);
            this.WS.connection.send(blob);
        })
    }
    //Обновит маску изображения
    updateMask(link) {
        console.log('Controller -> updateMask()');
        this.canvas.updateMask(link);
        this.canvas.clearCanvas();
    }
    //Удалит canvas и маску
    removeCanvas() {
        this.canvas.removeCanvas();
    }
    //Управление комментариями
    sendComment(data) {
        console.log('Controller -> sendComment');

        const link = 'https://neto-api.herokuapp.com/pic/' + JSON.parse(localStorage.currentImage).id + '/comments';
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        this.HTTP.send(data, link, headers).then((data) => {
            console.log('Получен ответ по HTTP');
            console.log(data);
            this.comments.parse(data);
        });
    }
    //Скрывает либо отображает комментарии
    showHideComments(value = false) {
        this.comments.viewHideFormAll(value);
    }
    //Задаст стартовые параметры если изображение отсутствует
    defaultStart() {
        this.container.removeChild(this.container.querySelector('img.current-image'));
        //this.container.removeChild(this.container.querySelector('form.comments__form'));
        this.viewState.menuSet('default');
        if (this.hasImageIdInLink()) {

        }
    }
    //Задаст стартовые параметры если данные в системе уже есть
    standartStart() {
        this.WS.create();
        this.viewState.menuSet('main');
        this.canvas.scaleCanvas();
        this.comments.createForm();
    }
    //Проверит есть ли данные об изображении в теле ссылки
    hasImageIdInLink() {
        const link = window.location.href;
        const array = link.split('?');
        if (array.length === 1) {
            return false;
        }
        if (array.length > 1) {
            let array = link.split('?');
            array.splice(0, 1);
            array = array.map((el) => {
                const keyValue = el.split('=');
                const result = {}
                result[keyValue[0]] = keyValue[1];
                return result;
            })
            for (let i = 0; i < array.length; i++) {
                if (array[i].currentImage) {
                    return array[i].currentImage;
                }
            }
        }
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