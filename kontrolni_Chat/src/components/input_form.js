class Input_Form {
    constructor() {
        this.node = document.createElement('div');
        this.node.className = 'input-div';

        this.text = document.createElement('input');
        this.text.type = 'text'
        this.text.className = 'input-text';

        this.addBtn = document.createElement('input');
        this.addBtn.type = 'button';
        // this.addBtn.value = 'Add';
        this.addBtn.className = 'input-btn';

        this.node.appendChild(this.text);
        this.node.appendChild(this.addBtn);
    }

    btnClick(onClick) {
        this.addBtn.addEventListener('click', onClick);
    }

    getNode() {
        return this.node;
    }
}

export {
    Input_Form
}