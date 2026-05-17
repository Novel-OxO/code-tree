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
    let numbers = raw.trim().split('\n').map(Number);

    for(let number of numbers) {
        if(number === 1) {
            console.log('John');
        } else if(number === 2) {
            console.log('Tom');
        } else if(number === 3) {
            console.log('Paul');
        } else if (number === 4) {
            console.log('Sam');
        } else {
            console.log('Vacancy');
            break;
        }
    }
}

solve(readInput());
