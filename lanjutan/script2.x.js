// EXECUTION CONTEXT, HOISTING & SCOPE

// var nama = 'diaz'
// console.log(nama);

// creation phase pada global context
// nama var = undifined
// nama function = fn()
// hoisting
// window = global object
// this = window

// execution phase


// var nama = 'diaz'
// var umur = 19

// console.log(sayHello())

// function sayHello() {
//     return `Halo nama saya ${nama}, saya ${umur} tahun.`
// }

// var username = '@diazfarindra'

// function instagramURL(base) {
//     var url = 'https://instagram.com/'
//     return url + base
// }

// console.log(instagramURL(username));


// CLOSURE
// function init() {
//     // let name = 'diaz farindra'
//     return function (name) {
//         console.log(name)
//     }
// }
// let callName = init()
// callName('diaz')


// FUNCTION FACTORIES
// function greatings(time) {
//     return function (name) {
//             console.log(`hello ${name}, good ${time}`)
//     }
// }

// let morning = greatings('morning')
// let afternoon = greatings('afternoon')
// let night = greatings('night')

// morning('diaz')
// afternoon('farindra')
// night('ibrahim')


let add = (function () {
    let counter = 0
    return function () {
        return ++counter
    }
})()

console.log(add())
console.log(add())
console.log(add())
