const express = require('express')
const expressLayout = require('express-ejs-layouts')

const validator = require('express-validator')
const methodOverride = require('method-override')

const session = require('express-session')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')

// mongodb conection
require('./utils/db')
const Contact = require('./models/contact')

const app = express()
const port = 3000

// method override
app.use(methodOverride('_method'))

// flash config
app.use(cookieParser('secret'))
app.use(session({
    cookie: { maxAge: 6000 },
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}))
app.use(flash())

// built-in middleware
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

// third-party middleware
app.use(expressLayout)

// using ejs layouts
app.set('view engine', 'ejs')

// index
app.get('/', (req, res) => {
    res.render('index', {
        layout: 'layouts/main',
        title: 'home',
        name: 'diaz farindra'
    })
})

// about page
app.get('/about', (req, res) => {
    res.render('about', {
        layout: 'layouts/main',
        title: 'about'
    })
})

app.get('/contact', async (req, res) => {
    // Contact.find().then(result => res.send(result))

    const data = await Contact.find()

    res.render('contact', {
        layout: 'layouts/main',
        title: 'contact',
        contacts: data,
        message: req.flash('message')
    })
})

// form add
app.get('/contact/add', (req, res) => {
    res.render('add-contact', {
        layout: 'layouts/main',
        title: 'add contact'
    })
})

// create contact
app.post(
    '/contact/add',
    [
        validator.check('name', '"name" must be string').isString(),
        validator.check('email', 'email not valid!').isEmail().custom(async (value) => {
            const duplicate = await Contact.findOne({ email: value })
            if (duplicate) {
                throw new Error('email has been used!')
            }
            return true
        }),
        validator.check('phone', 'phone number not valid').isMobilePhone().custom(async (value) => {
            const duplicate = await Contact.findOne({ phone: value })
            if (duplicate) {
                throw new Error('phone number has been used!')
            }
            return true
        }),
    ],
    (req, res) => {
        const errors = validator.validationResult(req)

        if (! errors.isEmpty()) {
            res.render('add-contact', {
                layout: 'layouts/main',
                title: 'add contact',
                errors: errors.array(),
            })
        } else {
            Contact.insertMany(req.body, (err, result) => {
                // send flash message
                req.flash('message', 'data has been added!')
                res.redirect('/contact')
            })
        }
    }
)

// delete contact
app.delete('/contact', async (req, res) => {
    Contact.deleteOne({ _id: req.body.id }).then((result) => {
        // send flash message
        req.flash('message', 'data has been removed!')
        res.redirect('/contact')
    })
})

// form edit
app.get('/contact/edit/:id', async (req, res) => {
    const data = await Contact.findOne({ _id: req.params.id })

    res.render('edit-contact', {
        layout: 'layouts/main',
        title: 'edit contact',
        contact: data
    })
})

// update data
app.patch(
    '/contact',
    [
        validator.check('name', '"name" must be string').isString(),
        validator.check('email', 'email not valid!').isEmail().custom(async (value, { req }) => {
            const duplicate = await Contact.findOne({ email: value })
            if (value != req.body.oldEmail && duplicate) {
                throw new Error('email has been used!')
            }
            return true
        }),
        validator.check('phone', 'phone not valid').isMobilePhone().custom(async (value, { req }) => {
            const duplicate = await Contact.findOne({ phone: value })
            if (value != req.body.oldPhone && duplicate) {
                throw new Error('phone has been used!')
            }
            return true
        }),
    ],
    (req, res) => {
        const errors = validator.validationResult(req)

        if (! errors.isEmpty()) {
            res.render('edit-contact', {
                layout: 'layouts/main',
                title: 'edit contact',
                errors: errors.array(),
                contact: req.body
            })
        } else {
            Contact.updateOne({ _id: req.body._id }, {
                $set: {
                    name: req.body.name,
                    email: req.body.email,
                    phone: req.body.phone,
                }
            }).then((result) => {
                // send flash message
                req.flash('message', 'data has been updated!')
                res.redirect('/contact')
            })
        }
    }
)

// detail
app.get('/contact/:id', async (req, res) => {
    const data = await Contact.findOne({ _id: req.params.id })

    res.render('detail', {
        layout: 'layouts/main',
        title: 'detail contact',
        contact: data
    })
})

app.use((req, res) => {
    res.status(404)
    res.render('404', {
        layout: 'layouts/main',
        title: '404'
    })
})

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})
