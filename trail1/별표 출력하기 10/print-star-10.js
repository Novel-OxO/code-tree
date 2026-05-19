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

    for(let i = 1; i <= n; i++) {
        if(i % 2 === 1) {
            let stars = Math.floor(i / 2) + 1;
            let temp = '';
            for(let j = 1; j <= stars; j++) {
                temp += '* ';
            }
            console.log(temp);

        } else {
            let stars = n - Math.floor(i / 2) + 1;
            let temp = '';
            for(let j = 1; j <= stars; j++) {
                temp += '* ';
            }
            console.log(temp);
        }
    }

    for(let i = n; i >= 1; i--) {
        if(i % 2 === 1) {
            let stars = Math.floor(i / 2) + 1;
            let temp = '';
            for(let j = 1; j <= stars; j++) {
                temp += '* ';
            }
            console.log(temp);

        } else {
            let stars = n - Math.floor(i / 2) + 1;
            let temp = '';
            for(let j = 1; j <= stars; j++) {
                temp += '* ';
            }
            console.log(temp);
        }
    }
}

solve(readInput());
