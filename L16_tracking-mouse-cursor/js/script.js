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
        this.eyeCoords = element.getBoundingClientRect();
        console.log(this.eyeCoords);
    };
    changePosition(event) {
        //console.log('Вызов изменения позиции');
        //console.log(event);
        //console.log(window);
        const windowAbsSize = {
            x: window.innerWidth,
            y: window.innerHeight
        }
        const abs0 = {
            x: this.eyeCoords.x + this.eyeCoords.width / 2,
            y: this.eyeCoords.y + this.eyeCoords.height / 2
        }
        const shift = getShiftX(event);

        function getShiftX(e) {
            let x = 0;
            let y = 0;
            if (e.clientX > abs0.x) {
                x = 20 * (e.clientX - abs0.x) / (windowAbsSize.x - abs0.x);
            }
            if (e.clientX < abs0.x) {
                x = 20 * (e.clientX - abs0.x) / (abs0.x);
            }

            if (e.clientY > abs0.y) {
                y = 20 * (e.clientY - abs0.y) / (windowAbsSize.y - abs0.y);
            }
            if (e.clientY < abs0.y) {
                y = 20 * (e.clientY - abs0.y) / (abs0.y);
            }

            x = x > 1 ? 1 : x;
            x = x < -1 ? -1 : x;
            y = y > 1 ? 1 : y;
            y = y < -1 ? -1 : y;

            return {
                x: x,
                y: y
            }
        }
        //console.log(shift);
        this.element.style.left = 106 * (this.eyeCoords.width - this.coords.width) / 2 / this.eyeCoords.width + (17 * shift.x) + '%';
        this.element.style.top = 106 * (this.eyeCoords.width - this.coords.width) / 2 / this.eyeCoords.width + (17 * shift.y) + '%';;
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