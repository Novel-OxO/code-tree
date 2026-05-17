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
    let cnt = 0 ;

    while(n < 1000) {
        if(n % 2 === 0) {
            n = n * 3 + 1;
        } else {
            n = n * 2 + 2 ;
        }
        cnt++;
    }

    console.log(cnt);
}

solve(readInput());
