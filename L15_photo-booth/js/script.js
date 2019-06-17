'use strict';

const app = document.querySelector('.app');
const list = document.querySelector('.list');
const controls = document.querySelector('.controls');
const audio = document.createElement('audio');
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const photoFrame = document.createElement('video');
const takePhoto = document.querySelector('#take-photo');


audio.src = 'audio/click.mp3';

app.appendChild(photoFrame);
app.appendChild(audio);
app.appendChild(canvas);


navigator.mediaDevices
    .getUserMedia({
        video: true,
        audio: false
    })
    .then((stream) => {
        takePhoto.addEventListener('click', () => {
            audio.pause();
            audio.currentTime = 0;
            audio.play();

            setTimeout(() => {
                canvas.width = photoFrame.videoWidth;
                canvas.height = photoFrame.videoHeight;
                ctx.drawImage(photoFrame, 0, 0);
                createPhoto(canvas.toDataURL());
                //stream.getVideoTracks().map(track => track.stop());
            }, 100);

        });

        console.log(stream);
        photoFrame.srcObject = stream;
        photoFrame.onloadedmetadata = function (e) {
            photoFrame.play();
        };
        controls.style.display = 'inherit';
    })
    .catch((err) => {
        console.log(err);
    });

function createPhoto(url) {
    const figure = document.createElement('figure');

    const img = document.createElement('img');
    img.src = url;

    const figcaption = document.createElement('figcaption');

    const innerTexts = ['file_download', 'file_upload', 'delete'];

    for (let l = 0; l < 3; l++) {
        const a = document.createElement('a');
        const i = document.createElement('i');

        i.classList.add('material-icons');
        i.innerText = innerTexts[l];

        if (l === 0) {
            a.href = url;
            a.download = 'snapshot.png';
        }

        if (l === 1) {
            i.addEventListener('click', uploadImage);
        }

        if (l === 2) {
            i.addEventListener('click', (e) => {
                const element = e.target.parentElement.parentElement.parentElement;
                list.removeChild(element);
                console.log('Удаляем элемент', element);
            });
        }

        a.appendChild(i);
        figcaption.appendChild(a);
    }
    figure.append(img);
    figure.appendChild(figcaption);
    list.appendChild(figure);
}

function uploadImage(event) {
    const image = event.target.parentElement.parentElement.parentElement.querySelector('img');
    console.log(image);
    var xhr = new XMLHttpRequest();
    xhr.open(
        "POST",
        "https://neto-api.herokuapp.com/photo-booth",
        true
    );
    xhr.setRequestHeader('Content-type', 'multipart/formdata');
    xhr.addEventListener('load', onLoad)

    const formData = new FormData();

    const newCanvas = document.createElement('canvas');
    const newCtx = canvas.getContext('2d');
    newCanvas.width = image.clientWidth;
    newCanvas.height = image.clientHeight;

    //console.log(image.clientHeight, image.clientWidth);
    //console.log(newCanvas.height, newCanvas.width);

    newCtx.drawImage(image, 0, 0);

    newCanvas.toBlob(blob => {
        console.log(blob);
        formData.append('image', blob);
    });

    //formData.append('image', 'image');

    for (const [k, v] of formData) {
        console.log(k + ': ' + v);
    }

    xhr.send(formData);

    function onLoad() {
        console.log(xhr.responseText);
    }
}