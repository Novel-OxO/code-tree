const fs = require('fs')
let n = fs.readFileSync(0).toString()
n = Number(n)

if(n >= 80) {
    console.log('pass')
} else {
    let moreScore = 80 - n
    console.log(`${moreScore} more score`)
}