const fs = require('fs')

// reading files
// fs.readFile('./docs/blog.txt', (err, data) => {
//     if (err) {
//         console.log(err)
//     }

//     console.log(data.toString())
// })

// writing files
// fs.writeFile('./docs/blog1.txt', 'hello, world!', (err) => {
//     if (err) {
//         console.log(err)
//     }

//     console.log('success')
// })

// deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err)
        }

        console.log('file deleted')
    })
} else {
    console.log('file not exists, creating file...')

    fs.writeFileSync('./docs/deleteme.txt', '', 'utf-8')

    console.log('file created')
}

// directories
// if (! fs.existsSync('./assets')) {
//     console.log('creating folder...')

//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err)
//         }

//         console.log('folder created')
//     })
// } else {
//     console.log('folder alredy exists, deleting folder...')

//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log(err)
//         }

//         console.log('folder deleted')
//     })
// }