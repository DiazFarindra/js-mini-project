// // arithematic operator
// let x = 10;
// let y = 3;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);

// // increment (++)
// console.log(x++);
// console.log(x);

// // decrement (--)
// console.log(--x);
// console.log(x--);

// // assingment operators
// let x = 10;

// x = x + 5;
// x += 5;

// x = x * 3;
// x *= 3;

// // comparison operators
// let x = 1;

// // relational
// console.log(x > 0);
// console.log(x >= 1);
// console.log(x < 1);
// console.log(x <= 1);

// //equality
// console.log(x === 1);
// console.log(x !== 1);

// // strict equality (type + value)
// console.log(1 === 1); //true
// console.log('1' === 1); // false
// console.log(true === 1); // false

// // lose equality
// console.log(1 == 1); // true
// console.log('1' == 1); // true
// console.log(true == 1); // true

// //ternary operators
// // if a customer has more than 100 points,
// // they  are a 'gold' customer, otherwise,
// // they are a 'silver' customer.

// let points = 100;
// let type = points > 100 ? 'gold' : 'silver';

// console.log(type);

// // logical operators
// // logical AND (&&) - return true if both oprands are TRUE
// console.log(true && true); // true
// console.log(true && false); // false

// // logical OR (||) - return TRUE if one of the opeands is TRUE
// let highIncome = true;
// let goodCreditScore = false;
// let eligibleForLoan = highIncome || goodCreditScore;
// console.log(eligibleForLoan);

// // NOT (!)
// let applicactionRefused = !eligibleForLoan;
// console.log(applicactionRefused);

// // logical operators with non-booleans
// let userColor = undefined;
// let defaultColor = 'blue';
// let currentColor = userColor || defaultColor;
// console.log(currentColor); // blue

// 1 = 00000001
// 2 = 00000010
// 3 = 00000011
// 4 = 00000100
// 5 = 00000101
// 6 = 00000110
// 7 = 00000111
// 8 = 00001000

// console.log(1 | 2); // Bitwise OR
// console.log(1 & 2); // Bitwise AND

// let x = (2 + 3) * 4;
// console.log(x);

let a = "red";
let b = "blue";

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);