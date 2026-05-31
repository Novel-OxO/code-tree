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
    let str = raw.trim();
    let eeCount = 0;
    let ebCount = 0;

    for(let i = 0; i < str.length - 1; i++) {
        if(str.slice(i, i + 2) === 'ee') {
            eeCount++;
        }

        if(str.slice(i, i + 2) === 'eb') {
            ebCount++;
        }
    }
    
    console.log(eeCount + ' ' + ebCount);
}

solve(readInput());
