import { Message } from "./message";
import { getMessages, getUserMessage } from "../utilities/chat-services";


class Message_List {
    constructor() {
        this.node = document.createElement('div');
        this.node.id = 'message-list';
        //let message = new Message();

         


        //this.node.appendChild(message.getNode());
    }

    getMessagesF() {
    getMessages().then(data => {
        this.loadMessages(data.data.slice(-10));
    });
}

    getUserMessagesF(username) {
        getUserMessage(username).then(data => {
            this.loadMessages(data.messages);
        });
    }

    addMessage(message) {
        this.node.appendChild(message.getNode());
    }

     loadMessages(data) {
         data.forEach(element => {
             let message = new Message(element.username, element.message, element.timestamp);
             this.node.appendChild(message.getNode());
         });
     }

    getNode() {
        return this.node;
    }
}

export {
    Message_List
}