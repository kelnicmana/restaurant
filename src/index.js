import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

const homeTab = document.querySelector('#home');
const menuTab = document.querySelector('#menu');
const contactTab = document.querySelector('#contact');

homeTab.addEventListener('click', loadHome);
menuTab.addEventListener('click', loadMenu);
contactTab.addEventListener('click', loadContact);