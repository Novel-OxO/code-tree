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
    const inputs = raw.trim().split('\n').slice(1);
    const lengthSum = inputs.reduce((sum, line) => sum + line.length, 0);
    const aStartCount = inputs.filter(line => line.startsWith('a')).length;
    console.log(`${lengthSum} ${aStartCount}`);
}

solve(readInput());
