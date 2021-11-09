//simple ajax usage for api
// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=2f6f6aad&s=avengers',
//     success: (results) => {
//         console.log(results);
//     }
// })

// simple vanila js usage for api
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if (xhr.status === 200) {
//         if (xhr.readyState === 4) {
//             console.log(JSON.parse(xhr.response));
//         } else {
//             console.log(xhr.responseText);
//         }
//     }
// };
// xhr.open('get', 'http://www.omdbapi.com/?apikey=2f6f6aad&s=avengers');
// xhr.send();

// using fetch
// const movies = fetch('http://www.omdbapi.com/?apikey=2f6f6aad&s=avengers')
//     .then(response => response.json())
//     .then(response => console.log(response))


// Promise
// states (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// action (then / catch)

// how to make?
// example 1
// let fulfilled = true
// const promise1 = new Promise((resolve, reject) => {
//     if (fulfilled) {
//         resolve('yeeeaaah')
//     } else {
//         reject('noooooooo')
//     }
// });

// promise1.then(response => console.log('OK : ' + response))
//         .catch(response => console.log('NOT OK : ' + response))

// example 2
// let fulfilled = true
// const promise2 = new Promise((resolve, reject) => {
//     if (fulfilled) {
//         setTimeout(() => {
//             resolve('successsss')
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             reject('noooooooo')
//         }, 2000);
//     }
// })
// console.log('start')
// promise2.finally(() => console.log('finish wait'))
//         .then(response => console.log('OK : ' + response))
//         .catch(response => console.log('NOT OK : ' + response))
// console.log('finish')


// Promise.all() example
const movies = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'spiderman',
            sutradara: 'diaz',
            pemeran: 'farindra'
        }])
    }, 1000);
})

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'depok',
            temp: 40,
            kondisi: 'cerah berawan'
        }])
    }, 500);
})

// movies.then(response => console.log(response))
// cuaca.then(response => console.log(response))

Promise.all([movies, cuaca])
    .then(response => {
        const [movies, cuaca] = response
        console.log(movies)
        console.log(cuaca)
    })
