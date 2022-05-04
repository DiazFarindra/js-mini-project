const fs = require('fs')
const validator = require('validator')
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// check data folder is exists
if (! fs.existsSync('./data')) {
    console.log('folder not found, creating folder...')
    fs.mkdirSync('./data')
}

// check contact.json file in data folder is exists
if (! fs.existsSync('./data/contacts.json')) {
    console.log('file not found, creating file...')
    fs.writeFileSync('./data/contacts.json', '[]', 'utf-8')
}

const question = (question) => {
    return new Promise((resolve, reject) => {
        rl.question(`${question} : `, (answer) => {
            resolve(answer)
        })
    })
}

const loadContact = () => {
    const buffer = fs.readFileSync('data/contacts.json', 'utf-8')

    // * format buffer file from string to json
    const contacts = JSON.parse(buffer)

    return contacts
}

const save = (name, email, phone) => {
    // Setup the data in a data memory
    const data = { name, email, phone }
    const contacts = loadContact()

    // check duplicate
    const duplicateEmail = contacts.find((contact) => contact.email == email)
    const duplicatePhone = contacts.find((contact) => contact.phone == phone)

    if (duplicateEmail) {
        console.log('contact has been registered, use another!')
        rl.close()
        return false
    }

    if (duplicatePhone) {
        console.log('contact has been registered, use another!')
        rl.close()
        return false
    }

    // check email
    if (! validator.isEmail(email)) {
        console.log('email not valid!')
        rl.close()
        return false
    }

    // check phone number
    if (! validator.isMobilePhone(phone, 'id-ID')) {
        console.log('phone number not valid!')
        rl.close()
        return false
    }

    // * push contact data into contacts.json array data
    contacts.push(data)

    // TODO: write data json format into contacts.json file as a string
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))

    console.log('data added!')
    rl.close()
}

const list = () => {
    const contacts = loadContact()
    contacts.forEach((contact, i) => {
        console.log(`${i+1}. name: ${contact.name}, email: ${contact.email}, phone: ${contact.phone}`)
    })

    rl.close()
}

const detail = (email) => {
    const contacts = loadContact()

    const contact = contacts.find((contact) => contact.email.toLowerCase() == email.toLowerCase())

    if (! contact) {
        console.log(`${email} not found!`)
        rl.close()
        return false
    }

    console.log(contact.name)
    console.log(contact.email)
    console.log(contact.phone)

    rl.close()
}

const remove = (email) => {
    const contacts = loadContact()
    const data = contacts.filter((contact) => contact.email.toLowerCase() != email.toLowerCase())

    if (contacts.length == data.length) {
        console.log(`${email} not found!`)
        rl.close()
        return false
    }

    // TODO: write data json format into contacts.json file as a string
    fs.writeFileSync('data/contacts.json', JSON.stringify(data))

    console.log(`${email} deleted!`)
    rl.close()
}

module.exports = { question, save, list, detail, remove }
