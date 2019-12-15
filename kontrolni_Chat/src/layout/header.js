class Header {
    constructor() {
        this.node = document.createElement('div');
        this.banner = document.createElement('h1');
        this.banner.textContent = 'Welcome! Now start chatting';
        this.banner.id = 'banner';
        this.node.id = 'header';
        this.div = document.createElement('div');
        this.div.id = 'square';
        this.div.style.display = 'inline-block';

        this.node.appendChild(this.banner);
        this.node.appendChild(this.div);
    }

    getNode() {
        return this.node;
    }
}

export {
    Header
}