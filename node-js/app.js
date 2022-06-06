const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

// routes
const router = require('./routes/blogs')

// express app
const app = express()
const port = 3000

// database (mongodb)
const db = 'mongodb+srv://diazfarindra:kronos@cluster0.w5ofduv.mongodb.net/nodetest?retryWrites=true&w=majority'

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(port))
    .catch((err) => console.log(err))

// register view engine
app.set('view engine', 'ejs')

// middleware and static files
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.redirect('/blogs')
})

app.get('/about', (req, res) => {
    // res.end('hello world!')
    res.render('about', {
        title: 'about',
    })
})

// blogs routes
app.use('/blogs', router)

app.use((req, res) => {
    res.status(404).render('404', {
        title: '404',
    })
})