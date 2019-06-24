'use strict';
const canvas = document.getElementById('wall');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const maxX = canvas.width;
const maxY = canvas.height;
const pi = Math.PI;
const count = Math.round(randomValue(25, 100));

class Cross {
    constructor() {
        this.x = randomValue(0, maxX);
        this.y = randomValue(0, maxY);
        this.startX = this.x;
        this.startY = this.y;
        this.size = 20 * randomValue(0.1, 0.6) / 2;
        this.weight = 5 * randomValue(0.1, 0.6) / 2;
        this.rSpeed = randomValue(0, 0.4) - 0.2;
        this.timeFuncNum = Math.round(randomValue(0, 1));
        this.directX = 1;
        this.directY = 1;
    }
    create() {
        const ctx = canvas.getContext('2d');
        const x = this.x;
        const y = this.y;
        const size = this.size;

        ctx.beginPath();
        ctx.strokeStyle = 'white';
        ctx.lineWidth = this.weight;
        ctx.moveTo(x, y);
        ctx.lineTo(x + size, y);
        ctx.moveTo(x, y);
        ctx.lineTo(x, y + size);
        ctx.moveTo(x, y);
        ctx.lineTo(x - size, y);
        ctx.moveTo(x, y);
        ctx.lineTo(x, y - size);
        ctx.stroke();
        ctx.closePath();
    }
    timeFunc(x, y) {
        const time = new Date().getTime();
        //console.log(time);
        if (this.timeFuncNum === 0) {

            return {
                x: x + (Math.sin((50 + x + (time / 10)) / 100) * 3) * this.directX,
                y: y + (Math.sin((45 + x + (time / 10)) / 100) * 4) * this.directY
            };

        }
        if (this.timeFuncNum === 1) {

            return {
                x: x + (Math.sin((x + (time / 10)) / 100) * 5) * this.directX,
                y: y + (Math.sin((10 + x + (time / 10)) / 100) * 2) * this.directY
            }

        }
    }

    nextPosition() {
        const coords = this.timeFunc(this.startX, this.startY);
        if (coords.x < 0 || coords.x > maxX) {
            this.directX = this.directX * -1;
        }
        if (coords.y < 0 || coords.y > maxY) {
            this.directY = this.directY * -1;
        }

        this.x = coords.x;
        this.y = coords.y;
        this.create();
    }
}

class Ring {
    constructor() {
        this.x = randomValue(0, maxX);
        this.y = randomValue(0, maxY);
        this.startX = this.x;
        this.startY = this.y;
        this.size = 20 * randomValue(0.1, 0.6) / 2;
        this.weight = 5 * randomValue(0.1, 0.6) / 2;
        this.rSpeed = randomValue(0, 0.4) - 0.2;
        this.timeFuncNum = Math.round(randomValue(0, 1));
        this.directX = 1;
        this.directY = 1;
    }
    create() {
        const ctx = canvas.getContext('2d');
        const x = this.x;
        const y = this.y;
        const size = this.size;

        ctx.beginPath();
        ctx.strokeStyle = 'white';
        ctx.lineWidth = this.weight;
        ctx.arc(x, y, size / 2, 0, 2 * pi);
        ctx.stroke();
    }
    timeFunc(x, y) {
        const time = new Date().getTime();
        //console.log(time);
        if (this.timeFuncNum === 0) {

            return {
                x: x + (Math.sin((50 + x + (time / 10)) / 100) * 3) * this.directX,
                y: y + (Math.sin((45 + x + (time / 10)) / 100) * 4) * this.directY
            };

        }
        if (this.timeFuncNum === 1) {

            return {
                x: x + (Math.sin((x + (time / 10)) / 100) * 5) * this.directX,
                y: y + (Math.sin((10 + x + (time / 10)) / 100) * 2) * this.directY
            }

        }
    }

    nextPosition() {
        const coords = this.timeFunc(this.startX, this.startY);
        if (coords.x < 0 || coords.x > maxX) {
            this.directX = this.directX * -1;
        }
        if (coords.y < 0 || coords.y > maxY) {
            this.directY = this.directY * -1;
        }

        this.x = coords.x;
        this.y = coords.y;
        this.create();
    }
}

const crosses = new Array(count).fill(0).map((el) => {
    return new Cross;
});
const rings = new Array(count).fill(0).map((el) => {
    return new Ring;
});
setInterval(update, 20);


function update() {
    clearCanvas();
    crosses.forEach((el) => {
        el.nextPosition();
    })
    rings.forEach((el) => {
        el.nextPosition();
    })

}

function randomValue(min, max) {
    return Math.round((min + (max - min) * Math.random()) * 100) / 100;
}

function clearCanvas() {
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle = '#04BBD3';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.closePath();
}