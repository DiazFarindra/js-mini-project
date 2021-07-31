
// global variable
// const numbers = [1, 2, 3, 4];


// // add array to end
// numbers.push(5, 6);

// // add array to beginning
// numbers.unshift(1, 2);

// // add array to middle
// numbers.splice(2, 0, 'a', 'b');

// // removing an element
// from end
// const last = numbers.pop();

// from beginning
// const first = numbers.shift();

// from middle
// numbers.splice(2, 1);

// console.log(numbers);



// console.log(numbers.indexOf(1));
// console.log(numbers.includes(1));



// const courses = [
//     {id: 1, name: 'a'},
//     {id: 2, name: 'b'},
// ];
// const course = courses.find(course => course.name === 'a');
// console.log(course);



// const first = [1, 2, 3];
// const first = [{id: 1}];
// const second = [4, 5, 6];

// const combined = first.concat(second);
// first[0].id = 10;

// const combined = [...first, ...second];

// const slice = combined.slice();

// console.log(combined);
// console.log(slice);



// for (let number of numbers) {
//     console.log(number);
// }

// numbers.forEach((number) => console.log(number));



// const joined = numbers.join(',');
// console.log(joined);

// const message = "wkw wkwk wkw";
// const parts = message.split(' ');
// console.log(parts);

// console.log(parts.join(' '));


// const numbers = [2, 4, 3, 1];
// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

// const courses = [
//     {id: 1, name: 'a'},
//     {id: 2, name: 'b'},
// ]

// courses.sort((a, b) => {
//     if (a.name < b.name) return -1;
//     if (a.name > b.name) return 1;
//     return 0;
// })

// console.log(courses);



// let sum = 0;
// for (let n of numbers)
//     sum += n;

// console.log(sum);

// a = 1, c = 2 => a = 3
// a = 3, c = 3 => a = 6
// a = 6, c = 4 => a = 10
// const sum = numbers.reduce((acclumulator, currentValue) => {
//     return acclumulator + currentValue;
// });
// console.log(sum);



// exercise 1
// const num = arrayFromRange(1, 10);
// console.log(num);

// function arrayFromRange(min, max) {
//     const output = [];
//     for (let i = min; i <= max; i++) {
//         output.push(i);
//     }
//     return output;
// }


// exercise 2
// const numbers = [1, 2, 3, 4, 5];
// console.log(includes(numbers, 1));

// function includes(array, searchElement) {
//     for (let element of array) {
//         if (element === searchElement) {
//             return true
//         }
//     }
//     return false
// }


// exercise 3
// const numbers = [1, 2, 3, 4, 5];

// const output = except(numbers, [2, 3]);
// console.log(output);

// function except(array, excluded) {
//     const output = [];

//     for (let element of array) {
//         if (!excluded.includes(element)) {
//             output.push(element)
//         }
//     }

//     return output;
// }


// exercise 4
// const numbers = [1, 2, 3, 4];

// const output = move(numbers, 0, 1);
// console.log(output);

// function move(array, index, offset) {
//     const position = index + offset;

//     if (position >= array.length || position < 0) {
//         console.error('invalid offset');
//         return;
//     }

//     const output = [...array];
//     const element = output.splice(index, 1)[0];
//     output.splice(position, 0, element);
//     return output;
// }


// exercise 5
// const numbers = [1, 2, 3, 4];

// const count = countOccurrences(numbers, 1);

// console.log(count);

// function countOccurrences(array, searchElement) {
    // let count = 0;
    // for (let element of array) {
    //     if (element === searchElement) {
    //         count++;
    //     }
    // }
    // return count;

//     return array.reduce((acclumulator, current) => {
//         const occurrence = (current === searchElement) ? 1 : 0;
//         return acclumulator + occurrence;
//     }, 0);
// }


// exercise 6
// const numbers = [1, 2, 3, 4];

// const max = getMax([1, 2, 3]);

// console.log(max);

// function getMax(array) {
//     if (array.length === 0) return undefined;

    // let max = array[0];

    // for (let i = 1; i < array.length; i++) {
    //     if (array[i] > max) {
    //         max = array[i];
    //     }
    // }

    // return max;

//     return array.reduce((acclumulator, current) => {
//         return (current > acclumulator) ? current : acclumulator;
//     });
// }


// exercise 7
// const movies = [
//     { title: 'a', year: 2018, rating: 4.5 },
//     { title: 'b', year: 2018, rating: 4.7 },
//     { title: 'c', year: 2018, rating: 3 },
//     { title: 'd', year: 2017, rating: 4.5 },
// ];

// const title = movies
//     .filter(m => m.year === 2018 && m.rating >= 4)
//     .sort((a, b) => a.rating - b.rating)
//     .reverse()
//     .map(m => m.title)

// console.log(title);


const fizzBuzz = (num) => {
    if (!(num % 3)) {
        console.log(num, 'fizz');
    } else if (!(num % 5)) {
        console.log(num, 'buzz');
    } else if (!(num % 3) && !(num % 5)) {
        console.log(num, 'fizzBuzz');
    } else {
        console.log(num);
    }
}