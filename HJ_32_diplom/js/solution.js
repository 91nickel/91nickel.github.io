'use strict';
console.log(`Hello World`);
const imageContainer = document.querySelector('.wrap.app');
const firstImage = imageContainer.querySelector('img.current-image');
const menubarItems = imageContainer.querySelectorAll('ul li');
const preloader = document.querySelector('.image-loader');
const formatError = document.querySelector('.error');
let ws;

dragDrop();

class ViewState {
    constructor(menu = 'default', comments = true, paint = false, share = false, error = false, preloader = false) {
        this.menu = menu;
        this.comments = comments;
        this.paint = paint;
        this.share = share;
        this.error = error;
        this.preloader = preloader;
        this.nodes = {
            menubar: document.querySelector('ul.menu')
        }
        this.events();
    }
    events() {
        this.commentForms.forEach((el) => {
            el.addEventListener('click', this.commentOpen.bind(this));
        })
        this.nodes.menubar.children[1].addEventListener('click', (e) => {
            this.menuSet('main');
        })
        this.nodes.menubar.children[3].addEventListener('click', (e) => {
            this.menuSet('standart');
        })
        this.nodes.menubar.children[5].addEventListener('click', (e) => {
            this.menuSet('paint');
        })
        this.nodes.menubar.children[7].addEventListener('click', (e) => {
            this.menuSet('share');
        })
    }
    //Отображает меню в зависимости от состояния
    menuSet(state = 'default') {
        this.menu = state;
        clearMenu();
        showMenu(this.menu)();

        // В зависимости от переданного параметра разворачивает меню в требуемое состояние
        function showMenu(param = 'default') {
            console.log(`Вызов Show Menu`);
            const modes = {
                'default': function () {
                    console.log(`default`);
                    menubarItems.forEach((el, i) => {
                        if (i < 3) {
                            el.style.display = 'inline-block';
                        }
                    })
                },
                'main': function () {
                    console.log('main');
                    menubarItems.forEach((el, i) => {
                        if (i === 0 || i === 2 || i === 3 || i === 5 || i === 7) {
                            el.style.display = 'inline-block';
                        }
                    })
                },
                'standart': function () {
                    console.log('standart');
                    menubarItems.forEach((el, i) => {
                        if (i < 5) {
                            el.style.display = 'inline-block';
                        }
                    })
                },
                'paint': function () {
                    console.log('paint');
                    menubarItems.forEach((el, i) => {
                        if (i < 2 || i === 5 || i === 6) {
                            el.style.display = 'inline-block';
                        }
                    })
                },
                'share': function () {
                    console.log('share');
                    menubarItems.forEach((el, i) => {
                        if (i < 2 || i > 6) {
                            el.style.display = 'inline-block';
                        }
                    })
                },
                'all': function () {
                    console.log('all');
                    menubarItems.forEach((el) => {
                        el.style.display = 'inline-block';
                    })
                }
            }
            return modes[param];
        }

        // Полностью скрывает меню
        function clearMenu() {
            console.log(`Вызов функции Clear Menu`);
            menubarItems.forEach((el) => {
                el.style.display = 'none';
            })
        }

    }
    //Отображает или скрывает комментарии
    commentsSet() {
        this.comments = this.comments ? false : true;
        showComments(this.comments, this.commentForms);

        //В зависимости от переданного параметра скрывает или отображает комментарии
        function showComments(param = false, nodelist) {
            console.log(`Вызов showComments`);
            const displayStyle = param ? null : 'none';
            nodelist.forEach((el) => {
                el.style.display = displayStyle;
            });
        }
    }
    //Откроет переданную форму и закроет все остальные
    commentOpen(event) {
        closeForms(this.commentForms);
        openForm(event.currentTarget);

        //Закроет все формы в списке
        function closeForms(nodelist) {
            console.log(`Вызов closeForms`);
            nodelist.forEach((el) => {
                el.children[1].removeAttribute('checked');
                el.children[2].style.display = 'none';
            })
        }
        //Откроет переданную форму
        function openForm(node) {
            console.log(`Вызов openForm`);
            const input = node.children[1];
            const div = node.children[2];
            if (input.hasAttribute('checked')) {
                input.removeAttribute('checked');
            } else {
                input.setAttribute('checked', '');
            }

            if (div.style.display === 'block') {
                div.style.display = '';
            } else {
                div.style.display = '';
            }
        }
    }
    //На три секунды вызовет показ сообщения об ошибке в зависимости от параметра
    errorSet(type) {
        this.error = type;
        showError(this.error);
        //В зависимости от переданного параметра отображает одно из двух возможных уведомлений об ошибке
        function showError(param = true) {
            console.log(`Вызов showError`);
            let displayStyle = 'inherit';
            const p = formatError.querySelector('p');
            let innerText = param ? `Неверный формат файла. Пожалуйста, выберите изображение в формате .jpg или .png.` : `Чтобы загрузить новое изображение, пожалуйста воспользуйтесь пунктом "Загрузить новое" в меню.`;

            p.innerText = innerText;
            formatError.style.display = displayStyle;

            setTimeout(() => {
                formatError.style.display = 'none';
                console.log('Блок ошибки скрыт');
            }, 3000);
        }
    }
    //Отображает и скрывает прелоадер
    preloaderSet() {

        this.preloader = this.preloader ? false : true;
        showPreloader(this.preloader);

        function showPreloader(param = true) {
            console.log(`Вызов showPreloader`);
            let displayValue = param ? null : 'none';
            preloader.style.display = displayValue;
        }
    }
    get commentForms() {
        return document.querySelectorAll('.wrap .comments__form');
    }
}

class MovingElement {
    constructor(container = document.querySelector('.menu')) {
        this.container = container;
        this.movingElement = null;
        this.onMoving = false;
        this.left = this.container.getBoundingClientRect().left;
        this.top = this.container.getBoundingClientRect().top;
        this.shift = {
            x: this.container.children[0].getBoundingClientRect().width / 2,
            y: this.container.children[0].getBoundingClientRect().height / 2
        }
        if (this.position) {
            this.container.style.left = this.position.x;
            this.container.style.top = this.position.y;
        } else {
            this.container.style.left = '0px';
            this.container.style.top = '0px';
        }
        this.events();
    }
    events() {
        //console.log(this.container);
        this.container.addEventListener('mousedown', (e) => {
            if (e.target === this.container.children[0]) {
                console.log(`MouseDown`);
                this.onMoving = true;
                this.movingElement = this.container;
            }
        });
        this.container.addEventListener('mousemove', (e) => {
            if (this.onMoving) {
                console.log(`MouseMove`);
                //console.log(`Регистрация движения`);
                this.changePosition(this.container, this.shift, e);
            }
        });
        this.container.addEventListener('mouseup', (e) => {
            console.log(`MouseUp`);
            this.onMoving = false;
            this.movingElement = null;
            this.position = true;
            //console.log(this);
        });
    }
    changePosition(element = this.container, shift = {
        x: 0,
        y: 0
    }, event) {
        let left = event.clientX - shift.x;
        let top = event.clientY - shift.y;
        left = left < 0 ? 0 : left;
        top = top < 0 ? 0 : top;
        left = left + element.getBoundingClientRect().width > window.innerWidth ? window.innerWidth - element.getBoundingClientRect().width : left;
        top = top + element.getBoundingClientRect().height > window.innerHeight ? window.innerHeight - element.getBoundingClientRect().height : top;
        requestAnimationFrame(() => {
            element.style.left = left + 'px';
            element.style.top = top + 'px';
        })
    }
    set position(data) {
        console.log('set position');
        localStorage.menuPosition = JSON.stringify({
            x: this.container.style.left,
            y: this.container.style.top
        })
    }
    get position() {
        console.log('get position');
        if (localStorage.menuPosition) {
            return JSON.parse(localStorage.menuPosition);
        }
    }
}

class DrawingMode {
    constructor(container = document.querySelector('.wrap.app')) {
        this.container = container;
        this.img = this.container.querySelector('img.current-image');
        this.img.style.opacity = 0.5;
        this.newCanvas();
        this.drawingPanel = this.container.querySelector('.draw-tools');
        this.isDrawing = false;
        this.events();
    }
    events() {
        this.img.addEventListener('mousedown', this.mouseDown.bind(this));
        this.img.addEventListener('mouseup', this.mouseUp.bind(this));
        this.img.addEventListener('mousemove', this.mouseMove.bind(this));
        this.img.addEventListener('mouseleave', this.mouseLeave.bind(this));
        this.drawingPanel.addEventListener('click', (event) => {
            if (event.target.tagName === 'INPUT') {
                event.target.parentElement.querySelectorAll('input').forEach(el => {
                    el.removeAttribute('checked');
                })
                event.target.setAttribute('checked', '');
            }
        })
    }
    //Скроет, либо покажет текущий canvas
    showHide() {
        this.canvas.style.display = this.canvas.style.display === '' && this.canvas ? 'none' : '';
    }
    mouseDown(event) {
        event.preventDefault();
        this.isDrawing = true;
        console.log('MouseDown на канвас');
        console.log('color - ', this.color);
    }
    mouseMove(event) {
        event.preventDefault();
        const isDrawing = this.isDrawing;
        const canvas = this.canvas;
        const ctx = this.ctx;
        const color = this.color;

        requestAnimationFrame(() => {
            if (isDrawing && viewState.menu === 'paint') {
                console.log('MouseMove на канвас');
                ctx.beginPath();
                ctx.fillStyle = color;
                ctx.lineJoin = 'round';
                ctx.lineCap = 'round';
                ctx.arc(event.clientX - canvas.getBoundingClientRect().left, event.clientY - canvas.getBoundingClientRect().top, 5, 0, 2 * Math.PI);
                ctx.fill();
            }
        })
    }
    mouseUp(event) {
        event.preventDefault();
        this.isDrawing = false;
        console.log('MouseUp на канвас');
    }
    mouseLeave(event) {
        event.preventDefault();
        this.isDrawing = false;
        console.log('MouseLeave на канвас');
    }
    //Создаёт новый canvas и вставляет его в нужное место
    newCanvas() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.classList.add('current-image');
        this.canvas.height = 0;
        this.canvas.width = 0;
        setTimeout(() => {
            this.canvas.height = this.img.clientHeight;
            this.canvas.width = this.img.clientWidth;
        }, 2000)
        this.container.insertBefore(this.canvas, this.img);
    }
    //Удаляет текущий canvas
    clearCanvas() {
        if (this.canvas) {
            this.container.removeChild(this.canvas);
            delete this.canvas;
            delete this.ctx;
        }
    }
    //Преобразует текущий canvas в img и вернет ссылку на изображение
    canvasToImg() {

    }
    //Получает текущий цвет из панели рисования
    get color() {
        return this.drawingPanel.querySelector('input[checked]').value;
    }
}

class WS {
    constructor() {
        this.getConnectionLink().then((data) => {
            console.log('Ссылка получена');
            this.createConnection(data);
        });
    }
    events() {
        this.connection.addEventListener('open', (event) => {
            console.log('WS соединение установлено');
        })
        this.connection.addEventListener('message', (event) => {
            console.log('Получено сообщение по WebSocket');
            console.log(event);
        })
    }
    //Создает WebSocket соединение
    createConnection(link) {
        if (link) {
            this.connection = new WebSocket(link);
            this.events();
        }
    }
    //Получает id из localStorage до тех пор пока не получит. Возвращает полную ссылку
    getConnectionLink() {
        console.log('getImageId')
        return new Promise((resolve, reject) => {
            getLink();

            function getLink() {
                requestAnimationFrame(() => {
                    if (localStorage.currentImage) {
                        resolve('wss://neto-api.herokuapp.com/pic/' + JSON.parse(localStorage.currentImage).id);
                    } else {
                        console.log('Повторный запуск');
                        setTimeout(getLink(), 500);
                    };
                });
            }
        });
    }
}

class Controller {
    constructor(container = document.querySelector('.wrap.app')) {
        this.container = container;
        this.defaultStart();
        this.menubar = this.container.querySelector('.menu');
        this.menubarMotion = new MovingElement(this.menubar);

        if (this.currentImage) {
            this.standartStart();
        };
        this.wsconnection = new WS();
    }
    //Задаст стартовые параметры если изображение отсутствует
    defaultStart() {
        this.container.removeChild(this.container.querySelector('img.current-image'));
    }
    //Задаст стартовые параметры если данные в системе уже есть
    standartStart() {
        this.canvas = new DrawingMode(this.container);
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
    //Установит WS соединение
    webSocketConnection() {}
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
}

//Задает параметры получения файла через drag&drop
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
            console.error(e);
            viewState.errorSet();
        }

        if (file && !document.querySelector('.current-image')) {
            const img = document.createElement('img');
            addClass('current-image', img);
            img.src = URL.createObjectURL(file);
            imageContainer.insertBefore(img, document.querySelector('.comments__form'));
            menubarItems.forEach(el => {
                el.classList.display = 'inherit';
            })
            viewState.preloaderSet();
            sendFileFetch(file).then((data) => {
                viewState.preloaderSet();
                viewState.menuSet('main');
                controller.canvas = new DrawingMode();
                console.log(data);
                localStorage.currentImage = JSON.stringify(data);
            });
            /*
            sendFile(file).then((request) => {
                console.log('request ', request);
                viewState.menuSet('main');
                canvas = new DrawingMode();
            });
            */
        }
    });
}

//Принимает файл и отправляет его на сервер
function sendFile(file) {
    return new Promise(function (resolve, reject) {

        const xhr = new XMLHttpRequest();
        xhr.open(
            "POST",
            "https://neto-api.herokuapp.com/pic",
            true
        );
        //xhr.setRequestHeader('Content-type', 'multipart/formdata');
        const form = new FormData();
        form.append('title', file.name)
        form.append('image', file);

        console.log(file);
        for (const [k, v] of form) {
            console.log(k + ': ' + v);
        }

        setTimeout(() => {
            xhr.send(form);
        }, 20)

        xhr.addEventListener('loadstart', () => {
            console.log(`Загрузка началась`);
            viewState.preloaderSet();
        });

        xhr.addEventListener('load', () => {
            viewState.preloaderSet();
            //console.log(xhr.responseText);
            resolve(xhr.responseText);
        });
    });
}

function sendFileFetch(file, resource = 'https://neto-api.herokuapp.com/pic') {

    const form = new FormData();
    form.append('title', file.name)
    form.append('image', file);
    /*
        console.log(file);
        for (const [k, v] of form) {
            console.log(k + ': ' + v);
        }
    */
    return fetch(resource, {
        body: form,
        credentials: 'same-origin',
        method: 'POST',
    }).then((res) => {
        return res.json();
    })
}

const addClass = (className, context) => context.classList.add(className),
    removeClass = (className, context) => context.classList.remove(className),
    hasClass = (className, context) => context.classList.contains(className);

const controller = new Controller();
const viewState = new ViewState();
//const movingMenu = new MovingElement();

if (!imageContainer.querySelector('img')) {
    console.log(`Загрузка по умолчанию`);
    viewState.menuSet('default');
}

//Переключение события комментария
imageContainer.querySelectorAll('input.menu__toggle').forEach((el) => {
    el.addEventListener('click', (e) => {
        viewState.commentsSet();
    })
})

//Добавит коментарий к уже существующему блоку коментов
function addComment(container, data) {

}

//Добавит новый блок комментариев
function addCommentBlock(data) {

}