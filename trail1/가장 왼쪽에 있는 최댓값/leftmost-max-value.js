const fs = require('fs');
const path = require('path');

function readInput() {
    const localPath = path.join(__dirname, 'input.txt');
    if(fs.existsSync(localPath)) {
        return fs.readFileSync(localPath, 'utf8');
    }
    return fs.readFileSync(0, 'utf8');
}
// N개의 정수가 주어졌을 때, 중복하여 등장하지 않는 정수 중 최댓값을 구하는 프로그램을 작성해보세요.
function solve(raw) {
    let arr = raw.trim().split('\n')[1].split(' ').map(Number);
    let temp = '';

    while(arr.length > 0) {
        let index = findMax(arr);
        temp += (index + 1) + ' ';
        arr = arr.slice(0, index);
    }
    console.log(temp.trim());
}

function findMax(arr) {
    let max = Math.max(...arr);
    let index = arr.indexOf(max);
    return index;
}

solve(readInput());
