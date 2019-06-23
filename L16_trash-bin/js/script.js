'use strict';
let movedItem = null;
let movedXY = [null, null];
let shiftX = 0;
let shiftY = 0;
const body = document.querySelector('body');
document.addEventListener('mousedown', dragStart);
document.addEventListener('mousemove', dragProgress);
document.addEventListener('mouseup', drop);


function dragStart(e) {
    if (e.target.classList.contains('logo')) {
        movedItem = e.target;
        movedXY = [e.target.style.top, e.target.style.left];
        const bounds = e.target.getBoundingClientRect();
        shiftX = e.pageX - bounds.left -
            window.pageXOffset;
        shiftY = e.pageY - bounds.top -
            window.pageYOffset;
    }
}

function dragProgress(e) {
    if (movedItem) {
        e.preventDefault();
        movedItem.style.left = event.pageX - shiftX + 'px';
        movedItem.style.top = event.pageY - shiftY + 'px';
        movedItem.classList.add('moving');
    }
}

function drop(e) {
    if (movedItem) {
        movedItem.style.visibility = 'hidden';
        const trash = document.elementFromPoint(e.clientX, e.clientY)
        movedItem.style.visibility = 'visible';
        if (trash.id === 'trash_bin') {
            body.removeChild(movedItem);
        } else {
            movedItem.classList.remove('moving');
            movedItem.style.top = movedXY[0];
            movedItem.style.left = movedXY[1];
            body.appendChild(movedItem);
        }
        movedItem = null;
    }
}