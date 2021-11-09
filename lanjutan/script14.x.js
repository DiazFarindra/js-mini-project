// Async Await

// const example = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('finish')
//     }, 2000);
// })
// console.log(example)
// example.then(() => console.log(example))


// without Async Await
function promise() {
    return new Promise((resolve, reject) => {
        const time = 5000

        if (time < 5000) {
            setTimeout(() => {
                resolve('finish')
            }, time);
        } else {
            reject('timeout!')
        }
    })
}
// const example = promise()
// example.then(() => console.log(example))
//     .catch(() => console.log(example))

// with Async Await
async function async() {
    try {
        const example = await promise()
        console.log(example)
    } catch (error) {
        console.log(error)
    }
}
async()
