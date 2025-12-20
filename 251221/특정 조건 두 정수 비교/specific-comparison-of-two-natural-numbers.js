const fs = require('fs')
let [a, b] = fs.readFileSync(0)
               .toString()
               .split(' ')
               .map(Number)

const result1 = a < b ? 1 : 0
const result2 = a === b ? 1 : 0

console.log(result1, result2)