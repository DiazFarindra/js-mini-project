
// const p2 = document.querySelector('.p2');
// const p3 = document.querySelector('.p3');
// const p4 = document.querySelector('.p4');

// function changeColor() {
//     p2.style.backgroundColor = 'lightblue';
// }

// p2.onclick = changeColor;
// p4.addEventListener('click', function() {
//     const ul = document.querySelector('section#b ul');
//     const li = document.createElement('li');
//     const teksLi = document.createTextNode('new item');
//     li.appendChild(teksLi);
//     ul.appendChild(li);
// });


// fibonaci
// let fib = [];
// fib[0] = 0;
// for(let i = 2; i <= 10; i++) {
// }


// program to generate fibonacci series up to n terms

// // take input from the user
// const number = parseInt(prompt('Enter the number of terms: '));
// // const number = 10;
// let n1 = 0, n2 = 1, nextTerm;

//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }

function palindrom(str) {
    const lower = str.toLowerCase();
    if (lower === lower.split('').reverse().join('')) {
        return true;
    } else {
        return false;
    }
}
console.log(palindrom('sasa'));
