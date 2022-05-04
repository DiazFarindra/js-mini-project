const http = require('http')
const fs = require('fs')

const port = 3000
const renderHTML = (path, res) => {
    fs.readFile(path, (err, file) => {
        if (err) {
            res.writeHead(404)
            res.write('Error: page not found!')
        } else {
            res.write(file)
        }
        res.end()
    })
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })

    const url = req.url

    switch (url) {
        case '/':
            renderHTML('./index.html', res)
            break;
        case '/about':
            renderHTML('./about.html', res)
            break;

        default:
            res.writeHead(404)
            renderHTML('./404.html', res)
            break;
    }
})

server.listen(port, () => {
    console.log(`listening port ${port}...`)
})
