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
    let input = raw.trim();
    let ret = input[0];
    let cnt = 1;

    for(let i = 1; i < input.length; i++) {
        if(input[i - 1] !== input[i]) {
            ret += cnt + input[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    ret += cnt;

    console.log(ret.length);
    console.log(ret);
}

solve(readInput());
