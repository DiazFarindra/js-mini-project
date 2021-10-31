// Arrow Function
// const showName = name => `hallo, ${name}`
// console.log(showName('diaz'))

// function literal
// const fruits = ['apple', 'manggo', 'watermelon']
// let countWords = fruits.map((fruit) => ({fruit: fruit, length: fruit.length}))
// console.table(countWords);


// (this) in Arrow Function

// constructor arrow function
const fruits = function (fruit, total) {
    this.fruit = fruit
    this.total = total
    this.call = () => {
        console.log(`fruit ${this.fruit}, total ${this.total}`)
    }
}
const apple = new fruits('apple', 10)
