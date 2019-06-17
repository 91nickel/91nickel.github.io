'use strict';

if (navigator.mediaDevices === undefined) {
  navigator.mediaDevices = {};
}

if (navigator.mediaDevices.getUserMedia === undefined) {
  navigator.mediaDevices.getUserMedia = function (constraints) {
    var getUserMedia = navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia;

    if (!getUserMedia) {
      return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
    }
    return new Promise((resolve, reject) => {
      getUserMedia.call(navigator, constraints, resolve, reject);
    });
  }
}

function createThumbnail(video) {
  return new Promise((done, fail) => {
    const preview = document.createElement('video');
    preview.src = URL.createObjectURL(video);
    preview.addEventListener('loadeddata', () => preview.currentTime = 2);
    preview.addEventListener('seeked', () => {
      const snapshot = document.createElement('canvas');
      const context = snapshot.getContext('2d');
      snapshot.width = preview.videoWidth;
      snapshot.height = preview.videoHeight;
      context.drawImage(preview, 0, 0);
      snapshot.toBlob(done);
    });
  });
}

const videoView = document.querySelector('.stories__action__view .stories__action__video');
const videoRec = document.querySelector('.stories__action__recording .stories__action__video');
console.log(videoView);

navigator.mediaDevices.getUserMedia({ audio: false, video: true })
  .then(function (stream) {
    videoView.srcObject = stream;
    videoView.onloadedmetadata = function (e) {
      videoView.play();
    };
  })
  .catch(function (err) {
    console.log('oh noes');
  });


function record(app) {
  return new Promise((done, fail) => {
    app.mode = 'preparing';
    setTimeout(() => {
        console.log('Должна начаться запись');
        app.mode = 'recording';
        let stream = videoView.srcObject;
        videoRec.srcObject = stream;
        videoRec.play();

        let recorder = new MediaRecorder(stream);
        let chunks = [];
        recorder.addEventListener('dataavailable', (e) => {
          console.log('Идет запись');
          chunks.push(e.data)
        });
        recorder.addEventListener('stop', (e) => {
          console.log('Остановка записи');
          const recorded =
            new Blob(chunks, { 'type': recorder.mimeType });
          chunks = null;
          recorder = stream = null;
          videoRec.src = URL.createObjectURL(recorded);
          console.log(recorded);
          const image = createThumbnail(recorded);
          console.log(image);
          app.preview.srcObject = null;
          videoView.srcObject.getTracks().forEach(track => track.stop());
          done({video:videoRec.src, frame:image});
        });
        setTimeout(startRec, 1000);
        setTimeout(stopRec, app.limit);

        function stopRec() {
          recorder.stop();
        }
        function startRec() {
          recorder.start();
        }
      
      //fail('Не удалось записать видео');
    }, app.limit);
  });
}