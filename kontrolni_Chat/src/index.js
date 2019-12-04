import { Header } from "./layout/header";
import { Main } from "./layout/main";

const app = document.querySelector('#app');
app.innerHTML = '';

let header = new Header();
let main = new Main();

app.appendChild(header.getNode());
app.appendChild(main.getNode());