'use strict';

document.addEventListener('mousemove', (e) => {
    const pupil = document.querySelector('.big-book__pupil');
    const eye = document.querySelector('.big-book__eye')
    const body = document.querySelector('body');

    console.log(e);
    const x0 = screen.width / 2
    const y0 = screen.height / 2;

    const x = -(x0 - e.screenX) / x0 * 2 * 30 + 'px';
    const y = -(y0 - e.screenY) / y0 * 2 * 30 + 'px';

    pupil.style.setProperty('--pupil-x', x);
    pupil.style.setProperty('--pupil-y', y);

    console.log(eye.clientWidth);
    const xFromEye = Math.abs((e.clientX - screen.width / 2) / (screen.width / 2));
    const yFromEye = Math.abs((e.clientY - screen.height / 2) / (screen.height / 2));

    //let r = xFromEye > yFromEye ? Math.ceil(xFromEye * 2) : Math.ceil(yFromEye * 2);
    //r += 1;
    
    let r = 1;
    if (xFromEye > 0 || yFromEye > 0) {
        r = 3;
    }
    if (xFromEye > 1/3 || yFromEye > 1/3) {
        r = 2;
    }

    if(xFromEye > 2/3 || yFromEye > 2/3) {
        r = 1;
    }
    
    console.log(xFromEye > 0);
    
    console.log(xFromEye, yFromEye);
    //console.log(r);

    eye.style.setProperty('--pupil-size', r);
})