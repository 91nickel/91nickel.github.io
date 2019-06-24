const throttle = (handler, ms) => {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(handler, ms);
  }
};
class TextEditor {
  constructor(container, storageKey = '_text-editor__content') {
    this.container = container;
    this.contentContainer = container.querySelector('.text-editor__content');
    this.hintContainer = container.querySelector('.text-editor__hint');
    this.filenameContainer = container.querySelector('.text-editor__filename');
    this.storageKey = storageKey;
    this.registerEvents();
    this.load(this.getStorageData());
  }
  registerEvents() {
    const save = throttle(this.save.bind(this), 1000);
    this.contentContainer.addEventListener('input', save);
    this.contentContainer.addEventListener('dragover', (e) => {
      e.preventDefault();
      textEditor.hintContainer.classList.add('text-editor__hint_visible');
    })
    this.contentContainer.addEventListener('mouseup', (e) => {
      e.preventDefault();
      textEditor.hintContainer.classList.remove('text-editor__hint_visible');
    })
    this.hintContainer.addEventListener('dragover', (e) => {
      e.preventDefault();
    })
    this.hintContainer.addEventListener('drop', (e) => {
      e.preventDefault();
      const file = Array.from(e.dataTransfer.files)[0];
      console.log(file);
      if (file.type === 'text/plain') {
        textEditor.loadFile(e);
      } else {
        console.error('Ошибка типа файла');
      }
      textEditor.hintContainer.classList.remove('text-editor__hint_visible');
    });
  }
  loadFile(e) {
    console.log('load file');
    textEditor.hintContainer.visibility = 'hidden';
    e.preventDefault();
    const file = Array.from(e.dataTransfer.files)[0];
    console.log(file);
    textEditor.readFile(file);
    textEditor.setFilename(file.name);
  }
  readFile(file) {
    console.log('read file');
    console.log(file);

    const reader = new FileReader();
    this.contentContainer.value = '';
    reader.addEventListener('load', event => {
      this.contentContainer.value = event.target.result;
      this.save();
      console.log(this.contentContainer.value);
    });
    reader.readAsText(file);
  }
  setFilename(filename) {
    this.filenameContainer.textContent = filename;
  }
  showHint(e) {
    console.log('show hint');
    this.hintContainer.classList.add('text-editor__hint_visible');
  }
  hideHint() {
    console.log('hide hint');
    textEditor.hintContainer.classList.remove('text-editor__hint_visible');
  }
  load(value) {
    console.log('load');
    this.contentContainer.value = value || '';
  }
  getStorageData() {
    console.log('get storage data');
    return localStorage[this.storageKey];
  }
  save() {
    console.log('save');
    localStorage[this.storageKey] = this.contentContainer.value;
  }
}

const textEditor = new TextEditor(document.getElementById('editor'));