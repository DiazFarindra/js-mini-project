// Synchronous Callback
// function halo(nama) {
//     alert(`halo ${nama}`)
// }

// function show(callback) {
//     const nama = prompt('enter your name :')
//     callback(nama)
// }

// function
// show(halo)
// anonymous function
// show(nama => alert(`halo ${nama}`))


// data syncronous
// console.log('start')
// data.forEach(data => console.log(data.nama))
// console.log('finish')


// Asynchronous Callback
// function getData(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 success(xhr.response)
//             } else if (xhr.status === 404) {
//                 error()
//             }
//         }
//     }

//     xhr.open('get', url);
//     xhr.send();
// }

// getData('data/data.json', (result) => {
//     const data = JSON.parse(result);
//     data.forEach(data => {
//         console.log(data.nama)
//     });
// }, (result) => {
//     return result;
// })

// Jquery Ajax
$.ajax({
    url: 'data/data.json',
    success: (results) => {
        results.forEach(data => {
            console.log(data.nama)
        });
    },
    error: (e) => {
        console.log(e.responseText);
    }
})
