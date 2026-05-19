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
    let len = 2 * n + 1;

    for(let i = 1; i <= len; i++) {
        let temp = '';
        for(let j = 1; j <= len; j++) {
            if(i === 1 || i === len || j === 1 || j === len) {
                temp += '* ';
                continue;
            }

            if(i % 2 === 0 && j % 2 === 0) {
                temp += '  ';
                continue;
            }
            temp += '* ';
        }
        console.log(temp);
    }
}

solve(readInput());
