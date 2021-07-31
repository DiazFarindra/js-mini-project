
// function declaration
walk(); // this is hoisting declaration
function walk() {
    console.log('walk');
}

// Anonymous function expression
const run = function() {
    console.log('run');
}
let move = run;
run();
move();



function sum(discount,...prices) {
    // let total = 0;
    // for (let value of arguments) {
    //     total += value;
    // }
    // return total;


    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}
console.log(sum(0.1, 20, 30));



function interest(principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years;
}
console.log(interest(10000));



const person = {
    firstName: 'diaz',
    lastName: 'farindra',
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
        if (typeof value !== 'string') {
            throw new Error('Value is not a string.')
        }

        const parts = value.split(' ');

        if (parts.length !== 2) {
            throw new Error('enter a first and last name.');
        }

        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

// getters (get) => access properties
// setters (set) => change (mutate) them

try {
    person.fullName = 'farindra diaz';
}
catch (e) {
    alert(e);
}
console.log(person.fullName);
