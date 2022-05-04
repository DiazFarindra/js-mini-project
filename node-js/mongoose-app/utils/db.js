const mongoose = require('mongoose')

main().catch(err => console.log(err))

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017', {
        autoIndex: true,
        dbName: 'express'
    })
}

// create new data
// const c1 = new Contact({
//     name: 'diaz farindra',
//     phone: 087855233702,
//     email: 'farindrad@gmail.com'
// })

// save to collection
// c1.save().then(result => console.log(result))
