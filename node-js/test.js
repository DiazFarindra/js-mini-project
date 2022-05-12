const sum = (...numbers) => {
    console.log(numbers.reduce((a, b) => a + b, 0))
}

sum(1, 2, 3)