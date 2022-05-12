const fs = require('fs')

const readStream = fs.createReadStream('./docs/readstreams.txt', 'utf-8')
const writeStream = fs.createWriteStream('./docs/writestreams.txt')

// readStream.on('data', (chunk) => {
//     console.log('----- NEW CHUNK -----')
//     console.log(chunk, 'some data here')

//     writeStream.write('\n ----- NEW CHUNK ----- \n')
//     writeStream.write(chunk)
// })

// piping
// readStream.pipe(writeStream)