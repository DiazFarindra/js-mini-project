const yargs = require('yargs')
const contacts = require('./contacts')

yargs.command({
    command: 'add',
    describe: 'add new contact',
    builder: {
        name: {
            describe: 'full name',
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: 'your email',
            demandOption: true,
            type: 'string'
        },
        phone: {
            describe: 'your phone number',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        contacts.save(argv.name, argv.email, argv.phone)
    }
}).demandCommand()

// list data
yargs.command({
    command: 'list',
    describe: 'show contacts',
    handler() {
        contacts.list()
    }
})

// detail data
yargs.command({
    command: 'detail',
    describe: 'detail contact based on email',
    builder: {
        email: {
            describe: 'your email',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        contacts.detail(argv.email)
    }
})

// delete data
yargs.command({
    command: 'remove',
    describe: 'remove contact based on email',
    builder: {
        email: {
            describe: 'your email',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        contacts.remove(argv.email)
    }
})

yargs.parse()
