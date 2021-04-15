function loadMenu() {
    const content = document.querySelector('#content');
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    const div = document.createElement('div');
    div.classList.add('menu');
    div.innerHTML = '<div class="items"><p>Spaghetti</p><p>$7.00</p></div><div class="items"><p>Pizza</p><p>$6.00</p></div><div class="items"><p>Lasagna</p><p>$8.00</p></div>';
    content.appendChild(div);
}

export default loadMenu