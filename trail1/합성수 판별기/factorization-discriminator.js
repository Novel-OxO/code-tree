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
    let number = Number(raw.trim());
    console.log(check(number) ? 'C' : 'N');
}

/**
 * 합성수: 2 이상 number -1 이하의 숫자로 나누어 떨어진다.
 * @param {number} number 합성수 일지 체크 할 숫자
 */
function check(number) {

    for(let i = 2; i < number; i++) {
        if(number % i === 0) {
            return true;
        }
    }

    return false;
}

solve(readInput());
