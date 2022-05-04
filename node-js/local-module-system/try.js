// const fs = require('fs') // core module
// const getUser = require('./index.js') // local module
// const moment = require('moment') // third party module

const index = require('./index.js')

index.getUser(1, result => console.log(result))
index.getUser(2, result => console.log(result))
console.log(index.PI)
console.log(new index.Person())
