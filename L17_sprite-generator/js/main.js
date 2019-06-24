const prop = (data, name) => data.map(item => item[name]),
  summ = data => data.reduce((total, value) => total + value, 0);

class SpriteGenerator {
  constructor(container) {
    this.uploadButton = container.querySelector('.sprite-generator__upload');

    this.submitButton = container.querySelector('.sprite-generator__generate');
    this.imagesCountContainer = container.querySelector('.images__added-count-value');
    this.codeContainer = container.querySelector('.sprite-generator__code');
    this.imageElement = container.querySelector('.sprite-generator__result-image');
    this.images = [];

    this.imagesCount = 0;

    this.registerEvents();
  }
  registerEvents() {
    this.submitButton.addEventListener('click', this.loadFiles.bind(this));

  }
  loadFiles(e) {
    console.log('Load Files');
    console.log(this.uploadButton);
    const result = this.imageElement;
    const files = Array.from(this.uploadButton.files);
    console.log(files[0]);
    const canvas = document.createElement('canvas');
    //canvas.width = 256;
    //canvas.height = 256;
    const img = document.createElement('img');
    img.src = URL.createObjectURL(files[0]);

    //console.log(document.children[0].children[1]);
    document.children[0].children[1].appendChild(img);
    document.children[0].children[1].appendChild(canvas);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);

    console.log(canvas);
    console.log(canvas.toDataURL())
    result.src = canvas.toDataURL();
    console.log(result);

    //document.children[1].appendChild(img);
  }
}

const spriteGenerator = new SpriteGenerator(document.getElementById('generator'));