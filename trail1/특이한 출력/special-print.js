const fs = require('fs');
const path = require('path');

function readInput() {
    const localPath = path.join(__dirname, 'input.txt');
    if(fs.existsSync(localPath)) {
        return fs.readFileSync(localPath, 'utf8');
    }
    return fs.readFileSync(0, 'utf8');
}


function solve(raw) {
    let n = Number(raw.trim());
    let temp = '';

    for(let i = 1; i <= n; i++) {

        for(let j = 1; j <= n; j++) {
            temp += `(${i}, ${j}) `;
            if((i + j) % 4 === 0) {
                temp += '\n';
            }
        }
    }
    console.log(temp);
}

solve(readInput());
