class Message {
    constructor(username, message, timestamp) {
        this.node = document.createElement('div');
        this.node.className = 'message-unit';

        this.msgDiv = document.createElement('div');
        this.msgDiv.className = 'msg-div';
        this.message = document.createElement('p');
        this.message.className = 'message';
        this.message.innerHTML = message;
        this.date = document.createElement('label');
        this.date.className = 'date';
        let date = new Date (timestamp);
        let msgDate = `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
        this.date.innerHTML = msgDate;

        this.autor = document.createElement('label');
        this.autor.className = 'autor';
        this.autor.innerHTML = username;

        this.msgDiv.appendChild(this.message);
        this.msgDiv.appendChild(this.date);

        this.node.appendChild(this.msgDiv);
        this.node.appendChild(this.autor);
    }

    getNode() {
        return this.node;
    }
}

export {
    Message
}