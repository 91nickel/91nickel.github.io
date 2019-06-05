'use strict';

var connection = new WebSocket('wss://neto-api.herokuapp.com/draw');
connection.addEventListener('open', (e) => {
    console.log('Вебсокет-соединение открыто');
});

connection.addEventListener('message', (e)=>{
    console.log(e);
})

window.editor.addEventListener('update', (e) => {
    console.log('Сработало событие update');
    console.log(e.canvas);

    const ctx = e.canvas.getContext('2d');
    const image = ctx.getImageData(0, 0, 650, 800);
    const binary = Uint8Array.from(image.data);
    connection.send(binary.buffer);
})