const http = require('http')
const fs = require('fs')
const _ = require('lodash')

const port = 3000;

const server = http.createServer((req, res) => {
    // lodash
    const num = _.random(0, 20)

    // set header content type
    res.setHeader('Content-Type', 'text/html')

    // send an html file
    fs.readFile('./views/index.html', (err, data) => {
        if (err) {
            console.log(err)
            // res.write(err)
            res.end(err)
        } else {
            // res.write(data)
            res.end(data)
        }
    })
})

server.listen(port, 'localhost', () => {
    console.log('listen to port localhost:' + port)
})