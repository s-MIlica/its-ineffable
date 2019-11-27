class LogIn {
    constructor() {
        this.logInTxt = document.createElement('input');
        this.logInTxt.type = 'text';
        this.logInTxt.id = 'log-in-user';
        this.logInTxt.placeholder = 'Username';

        this.logInBtn = document.createElement('input');
        this.logInBtn.type = 'submit';
        this.logInBtn.id = 'log-in-btn';
        this.logInBtn.value = 'LOG IN';

        this.logInDiv = document.createElement('div');
        this.logInDiv.appendChild(this.logInBtn);
        this.logInDiv.appendChild(this.logInTxt);
        this.username = '';

        this.logInBtn.addEventListener('click', () =>{
            this.username = this.logInTxt.value;
        });
    }

    getNode() {
        return this.logInDiv;
    }


    addNewUser(onClick) {
        this.logInBtn.addEventListener('click', onClick);
    }

}

export {
    LogIn
}