const contacts = require('./contacts')

const main = async () => {
    const name = await contacts.question('insert your name')
    const email = await contacts.question('insert your email')
    const phone = await contacts.question('insert your phone number')

    contacts.save(name, email, phone)
}

main()
