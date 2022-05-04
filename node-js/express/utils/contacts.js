const fs = require('fs')

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

// load contact
const loadContact = () => {
    const buffer = fs.readFileSync('data/contacts.json', 'utf-8')

    // * format buffer file from string to json
    const contacts = JSON.parse(buffer)

    return contacts
}

// find contact
const findContact = (id) => {
    const data = loadContact()
    const contact = data.find((contact) => contact.id == id)

    return contact
}

// write data / replace data
const save = (contacts) => {
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
}

// create new data
const add = (contact) => {
    const data = loadContact()

    data.push(contact)
    save(data)
}

// update data
const update = (newData) => {
    const data = loadContact()

    const filtered = data.filter((contact) => contact.email != newData.oldEmail)

    delete newData.oldEmail

    filtered.push(newData)
    save(filtered)
}

// delete data
const remove = (id) => {
    const data = loadContact()

    const filtered = data.filter((contact) => contact.id != id)

    save(filtered)
}

// email must be unique
const mustUnique = (value) => {
    const data = loadContact()
    return data.find((contact) => contact.email == value)
}


module.exports = { loadContact, findContact, mustUnique, add, update, remove }
