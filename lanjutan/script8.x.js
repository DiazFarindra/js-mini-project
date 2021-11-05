// Spread Operator
// const data = ['farindra', 'diaz', 'ibrahim']
// const data1 = ['farindra', 'diaz', 'ibrahim']
// console.log([...data, ...data1])


// Rest Parameter
// function jumlahkan(...values) {
//     return values.reduce((a, b) => a + b)
// }
// console.log(jumlahkan(1, 2, 3, 4, 5))

// Array Destructuring
// const data = ['diaz', 'haikal', 'zikri', 'farindra']
// const [ketua, wakil, ...anggota] = data
// console.log(anggota)

// Object Destructuring
// const team = {
//     pm: 'diaz',
//     fe: 'haikal',
//     be: 'zikri',
// }
// const {pm, ...myteam} = team
// console.log(myteam)

// filtering
function filterBy(type, ...values) {
    return values.filter(v => typeof v === type)
}

console.log(filterBy('number', 1, 2, 'diaz', false, 10, true, 'farindra'))
