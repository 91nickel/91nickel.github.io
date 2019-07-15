class ViewState {
    constructor(container, controller) {
        this.container = container;
        this.controller = controller;
        this.menu = 'default';
        this.comments = true;
        this.paint = false;
        this.share = false;
        this.error = false;
        this.preloader = false;
        this.nodes = {
            menubar: this.container.querySelector('ul.menu')
        }
        this.events();
    }
    events() {
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
        this.nodes.menubar.querySelectorAll('input.menu__toggle').forEach((el) => {
            el.addEventListener('click', (event) => {
                this.comments = this.comments ? false : true;
                this.controller.showHideComments(this.comments);
            })
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
}