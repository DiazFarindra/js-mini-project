const moongose = require('mongoose')
const Scema = moongose.Schema

const blogScema = new Scema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Blog = moongose.model('Blog', blogScema)

module.exports = Blog