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

    for(let i = 1; i <= n; i++) {
        const stars = 2 * n - 2 * i + 1;
        const spaces = i - 1;
        let temp = '';
        for(let j = 1; j <= spaces; j++) {
            temp += '  ';
        }
        for(let j = 1; j <= stars; j++) {
            temp += '* ';
        }
        console.log(temp);
    }

    for(let i = n - 1; i >= 1; i--) {
        const stars = 2 * n - 2 * i + 1;
        const spaces = i - 1;
        let temp = '';
        for(let j = 1; j <= spaces; j++) {
            temp += '  ';
        }
        for(let j = 1; j <= stars; j++) {
            temp += '* ';
        }
        console.log(temp);
    }
}

solve(readInput());
