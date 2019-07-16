class WS {
    constructor(controller) {
        this.controller = controller;
        this.getConnectionLink().then((data) => {
            console.log('Ссылка получена');
            this.createConnection(data);
        });
    }
    events() {
        this.connection.addEventListener('open', (event) => {
            console.log('WS соединение установлено');
        })
        this.connection.addEventListener('message', (event) => {
            console.log('Получено сообщение по WebSocket');
            console.log(JSON.parse(event.data).pic);
            this.controller.comments.parse(JSON.parse(event.data).pic);
        })
    }
    //Создает WebSocket соединение
    createConnection(link) {
        if (link) {
            this.connection = new WebSocket(link);
            this.events();
        }
    }
    //Получает id из localStorage до тех пор пока не получит. Возвращает полную ссылку
    getConnectionLink() {
        console.log('getImageId')
        return new Promise((resolve, reject) => {
            getLink();

            function getLink() {
                requestAnimationFrame(() => {
                    if (localStorage.currentImage) {
                        resolve('wss://neto-api.herokuapp.com/pic/' + JSON.parse(localStorage.currentImage).id);
                    } else {
                        console.log('Повторный запуск');
                        setTimeout(getLink(), 500);
                    };
                });
            }
        });
    }
}