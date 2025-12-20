const fs = require('fs')
const inputs = fs.readFileSync(0).toString().split('\n');

inputs
      .filter(x => x !== '')
      .map(input => Number(input).toFixed(3))
      .forEach(i => console.log(i));