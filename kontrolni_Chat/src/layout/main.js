import { Input_Form } from "../components/input_form";
import { Message_List } from "../components/message_list";
import { Message } from "../components/message";
import { saveMessage, getMessages } from "../utilities/chat-services";
//import { domainToUnicode } from "url";

class Main {
    constructor() {
        this.node = document.createElement('main');
        this.node.id = 'main';

        this.username = new Input_Form();
        this.chat = new Message_List();
        this.addMsg = new Input_Form();
        this.newList = new Message_List();
        this.newList.node.id = 'my-messages-div';

        
        this.deleteUserBtn = document.createElement('button');
        this.deleteUserBtn.id = 'delete-username-btn';
        this.deleteUserBtn.textContent = 'Delete Username';
        
        this.myMsgsBtn = document.createElement('button');
        this.myMsgsBtn.id = 'my-messages';
        this.myMsgsBtn.textContent = 'My messages';

        this.username.node.id = 'username-div';
        this.username.text.id = 'username';
        this.username.addBtn.id = 'add-username';
        this.username.text.placeholder = 'Username';
        this.username.addBtn.value = 'Add Username';

        this.addMsg.node.id = 'add-msg-div'
        this.addMsg.text.id = 'message';
        this.addMsg.addBtn.id = 'add-msg-btn';
        this.addMsg.text.placeholder = 'Your message here :)';
        this.addMsg.addBtn.value = 'Add your message';

        this.addMsg.node.appendChild(this.myMsgsBtn);
        this.username.node.appendChild(this.deleteUserBtn);
        this.node.appendChild(this.username.getNode());
        this.node.appendChild(this.addMsg.getNode());
        this.node.appendChild(this.chat.getNode());
        this.node.appendChild(this.newList.getNode());

        this.chat.getMessagesF();
        this.chat.timedMessages();
        
        let usernameTxt = '';

        this.username.btnClick( () => {
            usernameTxt = this.username.text.value.trim();
            console.log(usernameTxt);
            if (usernameTxt == '') {
                alert ('You must add your username!');
            }
            return usernameTxt;
        });

        this.deleteUserBtn.addEventListener('click', () => {
            return this.username.text.value = '';
        })

        this.addMsg.btnClick( () => {
            console.log(this.addMsg.text.value);
            let date = new Date();
            date = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
            console.log(date);
            console.log(usernameTxt);

            saveMessage(usernameTxt, this.addMsg.text.value).then(data => {
                if (data.success == 'true') {
                console.log(data.message);
                }
            });


            let message = new Message(usernameTxt, this.addMsg.text.value, date);
            console.log(message);
            console.log(message.getNode());

            this.chat.addMessage(message);
            // this.chat.node.appendChild(message.getNode());
            ///this.node.appendChild(message.getNode());
            //this.node.appendChild(this.chat.getNode());
            
           
            this.addMsg.text.value = '';
            
        })

        this.myMsgsBtn.addEventListener('click', () => {
        this.newList.getUserMessagesF(usernameTxt);
        this.node.appendChild(this.newList.getNode());
        })
      
    }

    getNode() {
        return this.node;
    }
}

export {
    Main
}