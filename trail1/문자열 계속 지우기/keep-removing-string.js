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
    let [str, target] = raw.trim().split('\n');

    while(true) {
        const idx = str.indexOf(target);
        if(idx === -1) break;
        str = str.slice(0, idx) + str.slice(idx + target.length);
    }

    console.log(str);
}

solve(readInput());
