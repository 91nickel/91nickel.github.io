class Comments {
    constructor(container, controller) {
        this.container = container;
        this.controller = controller;
        this.parse();
        this.events();
    }
    events() {
        /*
        this.container.children[0].children[4].addEventListener('click', (event) => {
            console.log(event);

            if (event.target.classList.contains('menu__toggle')) {
                if (event.target.value === 'off') {

                };
            }
        })
        */
    }
    addFormEvents(form) {
        form.addEventListener('click', (event) => {
            if (event.target.classList.contains('comments__marker-checkbox') && !event.target.hasAttribute('checked')) {
                this.closeFormAll();
                this.openCloseForm(event.target.parentElement);
                return;
            }
            if (event.target.classList.contains('comments__marker-checkbox') && event.target.hasAttribute('checked')) {
                this.closeFormAll();
                this.openCloseForm(event.target.parentElement);
                this.openCloseForm(event.target.parentElement);
            }
            if (event.target.classList.contains('comments__close')) {
                this.closeFormAll();
            }
            if (event.target.classList.contains('comments__submit')) {
                event.preventDefault();
                const coords = event.currentTarget.getBoundingClientRect();
                const coordsImg = this.container.querySelector('img').getBoundingClientRect();
                this.send(event.target.parentElement.querySelector('.comments__input').value, coords.left - coordsImg.left, coords.top - coordsImg.top);
            }
        })

    }
    get forms() {
        return this.container.querySelectorAll('form.comments__form');
    }
    get bodys() {
        return this.container.querySelectorAll('.comments__body');
    }
    get code() {
        return JSON.parse(localStorage.currentImage);
    }
    //Свернёт, или развернет переданную форму
    openCloseForm(node) {
        const checkbox = node.children[1];
        const comments = node.children[2];
        if (checkbox.hasAttribute('checked')) {
            checkbox.removeAttribute('checked');
            comments.style.display = 'none';
        } else {
            checkbox.setAttribute('checked', '');
            comments.style.display = 'block';
        }
    }
    //Свернет все формы комментариев
    closeFormAll() {
        this.forms.forEach((el) => {
            el.children[1].removeAttribute('checked');
            el.children[2].style.display = 'none';
        })
    }
    //Скроет либо покажет все формы с комментариями
    viewHideFormAll(value = false) {
        value = value ? '' : 'none';
        this.forms.forEach((el) => {
            el.style.display = value;
        })
    }
    //Создаст новый комментарий и вставит его в переданную форму
    create(form, date = new Date(), message = 'Текст комментария не указан') {
        console.log('Create Comment');
        const container = createNewElement('div', 'comment');

        container.appendChild(createNewElement('p', 'comment__time', null, date));
        container.appendChild(createNewElement('p', 'comment__message', null, message));

        form.insertBefore(container, form.querySelectorAll('.comment')[form.querySelectorAll('.comment').length - 1]);
        return form;
    }
    //Создаст чистую форму для комментариев и вставит её в DOM
    createForm(top = 'calc(4 * var(--menu-top))', left = 'calc(3 * var(--menu-left))') {
        console.log('Create Comments Form');
        const form = createNewElement('form', 'comments__form');
        form.appendChild(createNewElement('span', 'comments__marker'));
        form.appendChild(createNewElement('input', 'comments__marker-checkbox', 'checkbox'))

        const commentsBody = createNewElement('div', 'comments__body')
        form.appendChild(commentsBody);

        const comment = createNewElement('div', 'comment');
        const loader = createNewElement('div', 'loader');
        loader.style.display = 'none';
        new Array(5).fill(1).forEach((el) => {
            loader.appendChild(createNewElement('span'));
        })
        comment.appendChild(loader);
        commentsBody.appendChild(comment);

        const textBox = createNewElement('textarea', 'comments__input');
        textBox.placeholder = 'Напишите ответ...';
        commentsBody.appendChild(textBox);

        const closeButton = createNewElement('input', 'comments__close', 'button');
        closeButton.value = 'Закрыть';
        commentsBody.appendChild(closeButton);

        const submitButton = createNewElement('input', 'comments__submit', 'submit');
        submitButton.value = 'Отправить';

        commentsBody.appendChild(submitButton);

        form.style.top = top;
        form.style.left = left;
        this.addFormEvents(form);
        this.container.appendChild(form);
        return form;
    }
    //Удалит переданную форму из дерева
    removeForm(node) {
        console.log('Comments removeCommentForm');
        node.parentElement.removeChild(node);
    }
    //Полностью удалит все блоки форм из комментариев
    removeFormAll() {
        console.log('Comments removeCommentFormAll');
        this.forms.forEach((el) => {
            this.removeForm(el);
        })
    }
    //Удалит все комментарии из переданной формы
    removeCommentsFromForm(node) {
        console.log('Comments removeCommentsFromForm');
        const commentsBody = node.querySelector('.comments__body');
        const comments = commentsBody.querySelectorAll('.comments');
        comments.forEach((el, i) => {
            if (i < comments.length - 1) {
                commentsBody.removeChild(el);
            }
        })
    }
    //Отправит переданный комментарий на сервер
    send(text, left, top) {
        console.log('Comments -> send');
        const data = new FormData();
        data.append('message', text);
        data.append('left', left);
        data.append('top', top);

        this.controller.sendComment(data);
    }
    //Распарсит содержимое LocalStorage и создаст из него DOM
    parse() {
        console.log('Comments parse');
        this.removeFormAll();
        if (!this.code.comments) {
            this.createForm();
            return console.log('Комментарии не найдены');
        }
        let form = this.createForm(this.code.comments.top, this.code.comments.left);
        form = this.create(form, this.code.comments.timestamp, this.code.comments.message);
        return form;
    }
}