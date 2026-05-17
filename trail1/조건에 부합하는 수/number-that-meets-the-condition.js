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
    const num = Number(raw.trim());
    let result = '';

    for(let i = 1; i <= num; i++) {
        if(check(i)) {
            result += i + ' ';
        }
    }
    console.log(result);
}

function check(number) {
    if(number % 2 === 0 && number % 4 !== 0) { 
        return false;
    }
    
    if(Math.floor(number / 8) % 2 === 0) {
        return false;
    }

    if((number % 7) < 4) {
        return false;
    }

    return true;
}

solve(readInput());