import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

function loadNav() {
    const body = document.querySelector('.body');
    const nav = document.createElement('nav');
    nav.classList.add('navbar');
    nav.innerHTML = '<div class="tabs underline" id="home">Home</div><div class="tabs" id="menu">Menu</div><div class="tabs" id="contact">Contact</div>';
    body.insertBefore(nav, body.childNodes[0]);
}

document.addEventListener('DOMContentLoaded', loadNav());

document.addEventListener('DOMContentLoaded', loadHome);

const homeTab = document.querySelector('#home');
const menuTab = document.querySelector('#menu');
const contactTab = document.querySelector('#contact');

homeTab.addEventListener('click', loadHome);
menuTab.addEventListener('click', loadMenu);
contactTab.addEventListener('click', loadContact);

homeTab.addEventListener('click', function(){
    this.classList.add('underline');
    menuTab.classList.remove('underline');
    contactTab.classList.remove('underline');
});
menuTab.addEventListener('click', function(){
    this.classList.add('underline');
    homeTab.classList.remove('underline');
    contactTab.classList.remove('underline');
});
contactTab.addEventListener('click', function(){
    this.classList.add('underline');
    homeTab.classList.remove('underline');
    menuTab.classList.remove('underline');
});