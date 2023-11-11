import Alpine from 'alpinejs'
import '../styles/index.css';
import './calculator.ts';
import TestImage from '../images/test-image.png';

// Add Alpine object to the window scope
window.Alpine = Alpine

// initialize Alpine
Alpine.start()

// import HTMX and inject it into the window scope
window.htmx = require('htmx.org');

window.addEventListener('load', () => {
    document.getElementById('message').textContent = 'REBUNDLED BY WEBPACK!';
}); 

window.addEventListener('load', () => {
    const myImg = new Image();
    myImg.src = TestImage;
    myImg.style.width = "200px";
    myImg.style.height = "200px";

    document.body.appendChild(myImg);
})