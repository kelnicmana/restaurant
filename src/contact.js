function loadContact() {
    const content = document.querySelector('#content');
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    const div = document.createElement('div');
    div.classList.add('contact');
    div.innerHTML = '<p>1234 Some Fake Rd<br>Made-up City, State 98765</p><p>(789) 555-4321</p>';
    content.appendChild(div);
}

export default loadContact