// let radius = 1;
// let x = 1;
// let y = 1;
// function draw() {}
// function move() {}

// // OOP
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y:1,
//     },
//     isVisible: true,
//     draw: function() {
//         console.log('draw');
//     }
// };
// // circle.draw();


// // factory function
// function createCircle(radius) {
//     return {
//         radius: radius,
//         draw() {
//             console.log('draw');
//         }
//     };
// }
// const circle1 = createCircle('ping');
// // console.log(circle1);


// // constructor function
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }
// const circle2 = new Circle(21);
// // console.log(circle2);


// // dynamic nature of objects
// const circle = {
//     radius = 1,
// }
// // add properties to 'circle' obj
// circle.color = 'red';
// circle.draw = function() {}
// // delete properties from 'circle' obj
// delete circle.color;

// // cloning an objects
// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw');
//     },
// };

// const another = {};
// for (let key in circle) {
//     another[key] = circle[key];
// }

// const another = Object.assign({}, circle)

// const another = {...circle}

// console.log(another);


// // exercise 1
// let address = {
//     street: 'ephorbia',
//     city: 'depok',
//     zipCode: 16415,
// }

// function showAddress(address) {
//     for (let key in address) {
//         console.log(key, address[key]);
//     }
// }
// showAddress(address);


// // exercise 2
// factory function
// function showAddress(street, city, zipCode) {
//     return {
//         street: street,
//         city: city,
//         zipCode:zipCode,
//     }
// }
// console.log(showAddress('ephorbia', 'depok', 16415));

// constructor
// function ShowAddress(street, city, zipCode) {
//     this.street = street;
//     this.city = city;
//     this.zipCode = zipCode;
// }
// console.log(new ShowAddress('ephorbia', 'depok', 16415));


// // exercise 3
// function Address(street, city, zipCode) {
//     this.street = street;
//     this.city = city;
//     this.zipCode = zipCode;
// }

// function areEqual(address1, address2) {
//     return address1.street === address2.street &&
//     address1.city === address2.city &&
//     address1.zipCode === address2.zipCode
// }

// function areSame(address1, address2) {
//     return address1 === address2
// }

// let address1 = new Address('a', 'b', 'c');
// let address2 = new Address('a', 'b', 'c');

// console.log(areEqual(address1, address2));
// console.log(areSame(address1, address2));


// // exercise 4
// function blog() {
//     return {
//         title: 'a',
//         body: 'b',
//         author: 'c',
//         views: 10,
//         comments: [
//             {
//                 author: 'diaz',
//                 body: 'lorem ipsum',
//             },
//         ],
//         isLive: true,
//     }
// }
// console.log(blog());


// // exercise 5
// function Blog(title, body, author) {
//     this.title = title;
//     this.body = body;
//     this.author = author;
//     this.views = 0;
//     this.comments = [];
//     this.isLive = true;
// }
// console.log(new Blog('yeah', 'lorem', 'diaz'));


// // exercise 6
// let priceRanges = [
//     {label: '$', tooltip: 'inexpensive', minPerPerson: 0, maxPerPerson: 10},
//     {label: '$$', tooltip: 'moderate', minPerPerson: 11, maxPerPerson: 20},
//     {label: '$$$', tooltip: 'expensive', minPerPerson: 21, maxPerPerson: 30},
// ];

// let restaurants = [
//     {averagePerPerson: 5}
// ]