class DrawingMode {
    constructor(container = document.querySelector('.wrap.app'), controller) {
        this.container = container;
        this.controller = controller;
        this.newCanvas();
        this.newMask();
        this.drawingPanel = this.container.querySelector('.draw-tools');
        this.isDrawing = false;
        this.events();
    }
    events(a) {
        this.canvas.addEventListener('mousedown', this.mouseDown.bind(this));
        this.canvas.addEventListener('mouseup', this.mouseUp.bind(this));
        this.canvas.addEventListener('mousemove', this.mouseMove.bind(this));
        this.canvas.addEventListener('mouseleave', this.mouseLeave.bind(this));

        if (a !== 1 || !a) {
            this.drawingPanel.addEventListener('click', (event) => {
                if (event.target.tagName === 'INPUT') {
                    event.target.parentElement.querySelectorAll('input').forEach(el => {
                        el.removeAttribute('checked');
                    })
                    event.target.setAttribute('checked', '');
                }
            })
        }
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
        this.controller.sendCanvas();
        console.log('MouseUp на канвас');
    }
    mouseLeave(event) {
        event.preventDefault();
        this.isDrawing = false;
        console.log('MouseLeave на канвас');
    }
    //Создаёт новый canvas и вставляет его в нужное место
    newCanvas() {
        console.log('DrawingMode -> newCanvas');
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.classList.add('current-image');
        this.canvas.style.zIndex = '90';
        this.canvas.height = 0;
        this.canvas.width = 0;
        this.container.appendChild(this.canvas);
        this.scaleCanvas();
    }
    //Создает новую маску и вставляет её в нужное место
    newMask() {
        console.log('DrawingMode -> newMask()');
        this.mask = document.createElement('img');
        this.mask.classList.add('current-image-mask');
        this.mask.style.zIndex = '80';
        this.container.insertBefore(this.mask, this.canvas);
    }
    //Обновит маску изображения
    updateMask(src) {
        console.log('DrawingMode -> updateMask');
        this.mask.src = src;
    }
    scaleCanvas() {
        console.log('DrawingMode -> scaleCanvas()');
        if (this.controller.currentImage) {
            setTimeout(() => {
                try {
                    this.canvas.height = this.img.clientHeight;
                    this.canvas.width = this.img.clientWidth;
                } catch (e) {
                    console.error('Ошибка', e);
                    return;
                }
            }, 100)
        }
    }
    //Очищает текущий canvas
    clearCanvas() {
        console.log('DrawingMode -> clearCanvas()');
        if (this.canvas) {
            this.container.removeChild(this.canvas);
            delete this.canvas;
            delete this.ctx;
        }
        this.newCanvas();
        this.events(1);
    }
    //Удалит текущий canvas и маску
    removeCanvas() {
        console.log('DrawingMode -> removeCanvas()');
        if (this.canvas) {
            this.container.removeChild(this.canvas);
            delete this.canvas;
            delete this.ctx;
        }
        if (this.mask) {
            this.container.removeChild(this.mask);
            delete this.mask;
        }
    }
    //Преобразует текущий canvas в img и вернет ссылку на изображение
    get canvasImage() {
        return this.canvas;
    }
    //Получает текущий цвет из панели рисования
    get color() {
        return this.drawingPanel.querySelector('input[checked]').value;
    }
    get img() {
        return this.container.querySelector('img.current-image');
    }
}