const addClass = (className, context) => context.classList.add(className),
  removeClass = (className, context) => context.classList.remove(className),
  hasClass = (className, context) => context.classList.contains(className);
class iLayout {
  constructor(container) {
    this.container = container;
    this.positionsContainer = container.querySelector('.layout__positions');
    this.actionButton = container.querySelector('.layout__button');
    this.result = container.querySelector('.layout__result');
    this.layout = {
      left: null,
      top: null,
      bottom: null
    };
    this.registerEvents();
  }
  registerEvents() {
    document.addEventListener('dragover', (e) => {
      e.preventDefault();
    })
    document.addEventListener('drop', this.addImage.bind(this));
    this.actionButton.addEventListener('click', this.createCollage.bind(this))
  }
  addImage(e) {
    e.preventDefault();
    let file = e.dataTransfer.files[0];
    const container = e.target;
    const imageTypeRegExp = /^image\//;

    try {
      if (!hasClass('layout__item', container)) {
        throw ('Ошибка контейнера!');
      }

      if (!imageTypeRegExp.test(file.type)) {
        throw ('Ошибка типа файла!');
      }

      console.log('Файл прошел проверку');
    } catch (e) {
      file = null;
      console.log(e);
    }
    console.log(e);
    if (file) {
      const img = document.createElement('img');
      addClass('layout__image', img);
      img.src = URL.createObjectURL(file);
      container.innerHTML = '';
      container.appendChild(img);
    }
  }
  createCollage(e) {
    if(this.positionsContainer.querySelectorAll('img').length !== 3) {
      console.error('Недостаточно данных для формирования изображения');
      return;
    }

    const canvas = document.createElement('canvas');

    const imageLeft = this.positionsContainer.querySelector('.layout__item_left img');
    const imageTop = this.positionsContainer.querySelector('.layout__item_top img');
    const imageBottom = this.positionsContainer.querySelector('.layout__item_bottom img');

    canvas.width = imageLeft.parentElement.clientWidth + imageTop.parentElement.clientWidth;
    canvas.height = imageLeft.parentElement.clientHeight;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(imageLeft, 0, 0);
    ctx.drawImage(imageTop, imageLeft.parentElement.clientWidth, 0);
    ctx.drawImage(imageBottom, imageLeft.parentElement.clientWidth, imageTop.parentElement.clientHeight);

    const img = document.createElement('img');
    img.src = canvas.toDataURL();
    this.container.appendChild(img);
    this.result.innerText = img.src;
  }
}

new iLayout(document.getElementById('layout'));