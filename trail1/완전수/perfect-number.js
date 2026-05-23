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
    let [a, b] = raw.trim().split(' ').map(Number);
    let cnt = 0;
    for(let i = a; i <= b; i++) {
        let sum = 0;
        
        for(let j = 1; j < i; j++) {
            if(i % j === 0) {
                sum += j;
            }
        }

        if(sum === i) {
            cnt++;
        }
    }

    console.log(cnt);
}

solve(readInput());
