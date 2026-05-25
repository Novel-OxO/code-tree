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
    let cur = n;
    let cnt = 0;
    let temp = '';

    while(cnt < 2) {
        temp += cur + ' ';
        
        if(cur % 5 === 0) {
            cnt++;
        }

        cur += n;
    }

    console.log(temp.trim());
}

solve(readInput());
