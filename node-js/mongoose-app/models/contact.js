const mongoose = require('mongoose')

// create scema
const Contact = mongoose.model('Contact', {
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    }
})

module.exports = Contact
