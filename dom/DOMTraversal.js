
// DOM Basic
// const card = document.querySelector('.card');
// const close = document.querySelector('.close');

// close.addEventListener('click', function() {
//     card.style.display = 'none';
// });


// DOM Traversal
const close = document.querySelectorAll('.close');
const card = document.querySelectorAll('.card');

// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', (e) => {
//         // item.parentElement.style.display = 'none';
//         console.log(e);
//         e.target.parentElement.style.display = 'none';
//     })
// }

// close.forEach((item) => {
//     item.addEventListener('click', (e) => {
//         // item.parentElement.style.display = 'none';
//         console.log(e);
//         e.target.parentElement.style.display = 'none';
//     })
// })

//
const container = document.querySelector('.container')

container.addEventListener('click', e => {
    if (e.target.className === 'close') {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
        e.stopPropagation();
    }
})
