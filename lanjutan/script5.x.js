// tagged templates literals
const name = 'diaz farindra'
const age = 18
const email = 'farindrad@gmail.com'

function example(strings, ...values) {
    // let result = '';
    // strings.forEach((item, index) => {
    //     result += `${item}${values[index] || ''}`
    // });
    // return result

    return strings.reduce((result, str, index) => {
        return `${result}${str}${values[index] || ''}`
    }, '')
}

const str = example`hello, my name is ${name}, i'm ${age} years old. ${email}`
console.log(str)
