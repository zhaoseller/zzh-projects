const fs = require('fs')
const rs = fs.createReadStream('./files/lorem.txt', {encoding: 'utf8'})

const ws = fs.createWriteStream('./files/new_lorem.txt')

rs.on('data', (dataTrunk) => {
    ws.write(dataTrunk)
})