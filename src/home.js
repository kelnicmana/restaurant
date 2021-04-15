function loadHome() {
    const content = document.querySelector('#content');
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    const div = document.createElement('div');
    div.classList.add('home');
    div.innerHTML = '<h2>Pizza Place</h2><p>Affordable Italian food and vino.</p>';
    content.appendChild(div);
}

export default loadHome