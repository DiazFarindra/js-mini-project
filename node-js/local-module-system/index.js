// NODE JS

// synchronous style
// const getUserSync = (id) => {
//     const name = id === 1 ? 'diaz' : 'farindra'
//     return { id, name }
// }

// const userSatu = getUserSync(1)
// console.log(userSatu)

// const userDua = getUserSync(2)
// console.log(userDua)

// const halo = 'hello world!'
// console.log(halo)


// Asynchronous
const getUser = (id, callback) => {
    const time = id === 1 ? 1000 : 500
    setTimeout(() => {
        const name = id === 1 ? 'diaz' : 'farindra'
        callback({ id, name })
    }, time);
}

const PI = 3.14

class Person {
    constructor() {
        console.log('class person is created!')
    }
}

module.exports = {
    getUser: getUser,
    PI: PI,
    Person: Person
}
