class Header {
    constructor() {
        this.node = document.createElement('div');
        this.banner = document.createElement('h1');
        this.banner.textContent = 'Welcome! Now start chatting';
        this.banner.id = 'banner';
        this.node.id = 'header';

        this.node.appendChild(this.banner);
    }

    getNode() {
        return this.node;
    }
}

export {
    Header
}