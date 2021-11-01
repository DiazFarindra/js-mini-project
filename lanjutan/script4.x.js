const number = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9]

//? filter number >= 3
// for loop method
// const newNumber = []
// for (let index = 0; index < number.length; index++) {
//     if (number[index] >= 3) {
//         newNumber.push(number[index])
//     }
// }
// console.log(newNumber)

// filter method
// const newNumber = number.filter((n) => n >= 3)
// console.log(newNumber)


// map
// const newNumber = number.map((n) => n * 2)
// console.log(newNumber);


// reduce
// const newNumber = number.reduce((accumulator, currentvalue) => {
//     return accumulator + currentvalue
// }, 10)
// console.log(newNumber)


// method chaining
// const result = number.filter((n) => n > 5)
//     .map((n) => n * 3)
//     .reduce((acc, cur) => acc + cur)
// console.log(result)
