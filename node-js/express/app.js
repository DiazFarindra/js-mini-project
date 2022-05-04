const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const contacts = require('./utils/contacts')
const validator = require('express-validator')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')

const app = express()
const port = 3000

// config flash
app.use(cookieParser('secret'))
app.use(session({
    cookie: { maxAge: 6000 },
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}))
app.use(flash())

// using ejs layouts
app.set('view engine', 'ejs')

// third party Middleware
app.use(expressLayouts)

// build-in Middleware
app.use(express.static('public')) // accessing asset file in (root) public folder
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('index', {
        layout: 'layouts/main',
        title: 'home',
        name: 'diaz farindra'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        layout: 'layouts/main',
        title: 'about'
    })
})

app.get('/contact', (req, res) => {
    const data = contacts.loadContact()

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
    '/contact',
    [
        validator.check('name', '"name" must be string').isString(),
        validator.check('email', 'email not valid!').custom((value) => {
            const duplicate = contacts.mustUnique(value)
            if (duplicate) {
                throw new Error('email has been used!')
            }
            return true
        }),
        validator.check('phone', 'phone not valid').isMobilePhone(),
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
            contacts.add(req.body)

            // send flash message
            req.flash('message', 'data has been added!')

            res.redirect('/contact')
        }
    }
)

// delete contact
app.get('/contact/delete/:id', (req, res) => {
    const data = contacts.findContact(req.params.id)

    // check if exists
    if (! data) {
        res.status(404)
        res.send('404')
    } else {
        contacts.remove(req.params.id)

        // send flash message
        req.flash('message', 'data has been removed!')

        res.redirect('/contact')
    }
})

// form edit
app.get('/contact/edit/:id', (req, res) => {
    const data = contacts.findContact(req.params.id)

    res.render('edit-contact', {
        layout: 'layouts/main',
        title: 'edit contact',
        contact: data
    })
})

// update data
app.post(
    '/contact/update',
    [
        validator.check('name', '"name" must be string').isString(),
        validator.check('email', 'email not valid!').custom((value, { req }) => {
            const duplicate = contacts.mustUnique(value)
            if (value != req.body.oldEmail && duplicate) {
                throw new Error('email has been used!')
            }
            return true
        }),
        validator.check('phone', 'phone not valid').isMobilePhone(),
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
            contacts.update(req.body)

            // send flash message
            req.flash('message', 'data has been updated!')

            res.redirect('/contact')
        }
    }
)

app.get('/contact/:id', (req, res) => {
    const data = contacts.findContact(req.params.id)

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
    console.log(`example app listening at http://localhost:${port}`)
})
