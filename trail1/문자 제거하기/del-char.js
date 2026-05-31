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
    let lines = raw.trim().split('\n');
    let str = lines[0];
    str = str.split('');
    let arr = lines.splice(1).map(x => Number(x));

    for(let idx of arr) {
        if(idx >= str.length) {
            str[str.length - 1] = '';
            str = str.join('').split('');
            console.log(str.join(''));
            continue;
        }

        str[idx] = '';
        str = str.join('').split('');
        console.log(str.join(''));
    }

}

solve(readInput());
