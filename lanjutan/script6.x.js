// Destructuring Variable / Assignment

//? Destructuring Array
// const introduce = ['hello', 'my', 'name', 'diaz']
// const [one, two, three, four] = introduce
// console.log(one, two, three, four)

// swap
// let a = 1
// let b = 2
// console.log(a , b)
// let [c, d] = [b, a]
// console.log(c , d);

// in function
// function example() {
//     return [1, 2]
// }
// const [a, b] = example()
// console.log(a, b);

// rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5]
// console.log(a, values)


//? Destructuring Object
// const data = {
//     name: 'diaz farindra',
//     age: 18,
// }

// const {name, age} = data
// console.log(name, age);

// Assignment without declaration
// ({name, age} = {name: 'diaz farindra', age: 18 })
// console.log(name, age);

// Assign into new variable
// const data = {
//     name: 'diaz farindra',
//     age: 18,
//     email: 'farindrad@gmail.com'
// }
// // can assign default value
// const {name: n, age: a, email = 'example@gmail.com'} = data
// console.log(n, a, email);

// rest parameter
// const data = {
//     name: 'diaz farindra',
//     age: 18,
//     email: 'farindrad@gmail.com'
// }

// const { name, ...values } = data
// console.log(name, values);


// in function
// const data = {
//     name: 'diaz farindra',
//     age: 18,
//     email: 'farindrad@gmail.com'
// }

// function getData({ name }) {
//     return name
// }
// console.log(getData(data))


//? Destructutring

// array
// function kalkulasi(a, b) {
//     return [a + b, a - b, a * b, a / b]
// }

// object
// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// }

// const {tambah, kurang, kali, bagi} = kalkulasi(2, 3)
// console.log(tambah, kurang, kali, bagi)


// assignment object
const data = {
    nama: 'diaz farindra',
    umur: 18,
    email: 'farindrad@gmail.com',
    nilai: {
        uts: 100,
        uas: 95
    }
}

function result({ nama, umur, nilai: { uts, uas } }) {
    return `nama ${nama}, umur ${umur} nilai uts ${uts}, nilai uas ${uas}`
}

console.log(result(data))
