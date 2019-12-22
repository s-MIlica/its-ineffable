import React from 'react';

const Menu = () => {
    return (
        <menu>
                <ul id="menu-list">
                    <li className="menu-list-item"><a href="https://www.github.com/s-MIlica" target="_blank" rel="noopener noreferrer" title="Link to my GitHub" className="contacts-links">GitHub </a></li>
                    <li className="menu-list-item"><a href="http://www.linkedin.com/in/milica-stepanović-89443b147" target="_blank" rel="noopener noreferrer" title="Link to my LinkedIn" className="contacts-links">LinkedIn</a></li>
                    <li className="menu-list-item"><label className="contacts-links" title="Here's my email (this is not a link tho)">stepa.milica@gmail.com</label> </li>
                    <li id="by-me"> Milica Stepanović 2019</li>
                </ul>
        </menu>
    )
}

export default Menu;