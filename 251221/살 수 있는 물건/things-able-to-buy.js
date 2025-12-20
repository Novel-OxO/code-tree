const fs = require('fs')
let n = Number(fs.readFileSync(0).toString())

let product = ''

if(n >= 3000) {
    product = 'book'
} else if(n >= 1000) {
    product = 'mask'
} else {
    product = 'no'
}

console.log(product)