/* hour
 * if hour is between 6am and 12pm: Good morning!
 * if it is between 12pm and 6pm: Good Afternoon!
 * otherwise: Good evening!
*/

// let hour = 21

// if (hour >= 6 && hour < 12) {
//     console.log('good morning')
// } else if (hour >= 12 && hour < 18) {
//     console.log('good afternoon')
// } else {
//   console.log('good evening')
// }


// // switch and case
// let role = 'guest';

// switch (role) {
//     case 'guest':
//         console.log('guest');
//         break;

//     case 'moderator':
//         console.log('moderator');
//         break;

//     default:
//         console.log('unknown');
//         break;
// }


// loop
// for (let i = 1; i <= 5; i++) {
//     if (i % 2 !== 0) console.log(i);
//     console.log('diaz', i);
// }

// let i = 0;
// while (i <= 5) {
//     if (i % 2 !== 0) console.log(i);
//     i++;
// }

// let i = 0;
// do {
//     if (i % 2 !== 0) console.log(i);
//     i++;
// } while (i <= 5);

// // for-in
// const person = {
//     name: 'diaz',
//     age: 17,
// };

// for (let key in person) {
//     console.log(key, person[key]);
// }

// // for-of
// const colors = ['red', 'green', 'blue'];

// for (let color of colors) {
//     console.log(color);
// }

// // break and continue
// let i = 0;
// while (i <= 10) {
//     // if (i === 5) break;
//     if (i % 2 === 0) {
//         i++
//         continue;
//     }
//     console.log(i);
//     i++;
// }


// function
// let number = max(5, 10);
// console.log(number);

// function max(a, b) {
//     return (a > b) ? a : b;
// }

// function isLandscape(width, height) {
//     return (width > height);
// }

// console.log(isLandscape(10, 5));

function fizzBuzz(input) {
    if (typeof input !== 'number') {
        return NaN;
    }

    if (input % 3 === 0 && input % 5 === 0) {
        return "fizzbuzz";
    }

    if (input % 3 === 0) {
      return "fizz";
    }

    if (input % 5 === 0) {
      return "buzz";
    }

    return input;
}

function checkSpeed(speed) {

    const speedLimit = 70;
    const kmPoint = 5;

    if (speed < speedLimit + kmPoint) {
        console.log('ok');
        return;
    }

    const points = Math.floor((speed - speedLimit) / kmPoint);

    if (points >= 12) {
        console.log('license suspended');
    } else {
        console.log('points', points);
    }
}

function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        const message = (i % 2 === 0) ? 'even' : 'odd';
        console.log(i, message);
    }
}

const movie = {
  title: 'a',
  year: 2008,
  rating: 4.5,
  director: 'b'
}

function show(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'string')
    console.log(key, obj[key]);
  }
}
