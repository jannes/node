import { promises as fs } from 'fs'

function yo() {
    console.log('node running yo')
}

await fs.writeFile('test.txt', 'rode nunning oy')
setTimeout(yo, 3000);
