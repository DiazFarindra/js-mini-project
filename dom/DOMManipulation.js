
const title = document.getElementById('judul');
title.innerHTML = 'diaz farindra';
title.style.color = 'lightblue';
title.setAttribute('id', 'title');

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'hello world';


for (let i = 0; i < 2; i++) {
    // create new element
    const newTagP = document.createElement('p');
    const newText = document.createTextNode('new paragraph');

    // save text in paragraph
    newTagP.appendChild(newText);

    // save new tag in section A
    const sectionA = document.querySelector('section#a');
    sectionA.appendChild(newTagP);
}
