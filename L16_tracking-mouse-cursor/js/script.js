'use strict';
console.log('Hello world');
const leftEye = document.querySelector('.cat_position_for_left_eye');
const rightEye = document.querySelector('.cat_position_for_right_eye');
const body = document.querySelector('body');


class Eye {
    constructor(element) {
        this.element = element.children[0];
        this.coords = this.element.getBoundingClientRect();
        this.coordinates = {
            x: this.coords.x + this.coords.width / 2,
            y: this.coords.y + this.coords.heigt / 2
        }
    };
    changePosition(event) {
        console.log('Вызов изменения позиции');
        console.log(event);
        console.log(window);
        const windowAbsSize = {
            x: window.innerWidth,
            y: window.innerHeight
        }
        const windowCenter = {
            x: windowAbsSize.x / 2,
            y: windowAbsSize.y / 2
        }
        const shift = {
            xp: (event.clientX - windowCenter.x) / windowCenter.x,
            yp: (event.clientY - windowCenter.y) / windowCenter.y
        }
        this.element.style.left = 10 + 35 * event.clientX / windowAbsSize.x + '%';
        this.element.style.top = 10 + 35 * event.clientY / windowAbsSize.y + '%';
    }
}


const cLeftEye = new Eye(leftEye);
const cRightEye = new Eye(rightEye);

const mouseMove = throttle((event) => {
    cLeftEye.changePosition(event);
    cRightEye.changePosition(event);
})
document.addEventListener('mousemove', mouseMove);

function throttle(callback) {
    let isWaiting = false;
    return function () {
        if (!isWaiting) {
            callback.apply(this, arguments);
            isWaiting = true;
            requestAnimationFrame(() => {
                isWaiting = false;
            });
        }
    }
}