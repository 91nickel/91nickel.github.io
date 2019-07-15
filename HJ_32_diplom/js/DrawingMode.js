class DrawingMode {
    constructor(container = document.querySelector('.wrap.app'), controller) {
        this.container = container;
        this.controller = controller;
        this.img = this.container.querySelector('img.current-image');
        this.newCanvas();
        this.drawingPanel = this.container.querySelector('.draw-tools');
        this.isDrawing = false;
        this.events();
    }
    events() {
        this.canvas.addEventListener('mousedown', this.mouseDown.bind(this));
        this.canvas.addEventListener('mouseup', this.mouseUp.bind(this));
        this.canvas.addEventListener('mousemove', this.mouseMove.bind(this));
        this.canvas.addEventListener('mouseleave', this.mouseLeave.bind(this));
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
        const controller = this.controller;

        requestAnimationFrame(() => {
            if (isDrawing && controller.viewStateValue === 'paint') {
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
        this.container.appendChild(this.canvas);
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