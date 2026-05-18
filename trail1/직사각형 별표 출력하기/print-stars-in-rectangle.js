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
    let [n, m] = raw.trim().split(' ').map(Number);

    for(let i = 0; i < n; i++) {
        let temp = '';
        for(let j = 0; j < m; j++) {
            temp += '* ';
        }
        console.log(temp);
    }
}



solve(readInput());
