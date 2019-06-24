const prop = (data, name) => data.map(item => item[name]),
  summ = data => data.reduce((total, value) => total + value, 0);

const body = document.querySelector('body');

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
    this.submitButton.addEventListener('click', this.createSprite.bind(this));
    this.uploadButton.addEventListener('change', this.loadFiles.bind(this));
  }
  loadFiles(e) {
    console.log('LOAD FILES');
    const result = this.imageElement;
    const images = Array.from(this.uploadButton.files).map((el) => {
      const image = document.createElement('img');
      image.src = URL.createObjectURL(el);
      URL.revokeObjectURL(el);
      image.style.width = '256px';
      image.style.height = '256px';
      this.images.push(image);
      return image;
    });
    

    this.imagesCountContainer.innerText = this.images.length;
  }
  createSprite() {
    console.log('CREATE SPRITE');
    if(this.images.length === 0){
      console.log('Отказ в операции');
      return;
    }

    const canvas = document.createElement('canvas');
    canvas.width = 256 * matrix(this.images.length).width;
    canvas.height = 256 * matrix(this.images.length).height;

    let stepHor = 256;
    let stepVer = 256;
    let stepHorNow = 0;
    let stepVerNow = 0;
    let c = 0;

    for (let i = 0; i < matrix(this.images.length).height; i++) {
      stepHorNow = i * stepHor;
      for (let k = 0; k < matrix(this.images.length).width; k++) {
        stepVerNow = k * stepVer;
        const ctx = canvas.getContext('2d');
        try {
          if (this.images[c]) {
            ctx.drawImage(this.images[c], stepHorNow, stepVerNow);
          }
        } catch (e) {
          console.log(e);
        }
        c++;
      }
    }

    this.imageElement.src = canvas.toDataURL();
    this.spriteURL = this.imageElement.src;
    this.createCode();

    function matrix(length) {
      let sqr = Math.ceil(Math.sqrt(length));
      console.log(sqr);
      return {
        width: sqr,
        height: sqr
      };
    }
  }
  createCode() {
    console.log('CREATE CODE');
    let text = '.icon {\ndisplay: inline-block;\nbackground-image: url(' + this.spriteURL + ');\n}\n.icon_like {\nbackground-position: -48px 0;\nwidth: 50px;\nheight: 50px;\n}';
    this.codeContainer.innerHTML = text;
  }
}

function cons() {
  console.log('TEST');
}

function timeout(callback) {
  setTimeout(() => {
    return callback();
  }, 2)
}

const spriteGenerator = new SpriteGenerator(document.getElementById('generator'));