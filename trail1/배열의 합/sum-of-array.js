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
    const arr2D= raw.trim().split('\n').map(line => line.split(' ').map(Number));

    for(let arr of arr2D) {
        console.log(arr.reduce((acc, num) => acc + num, 0));
    }
}

solve(readInput());
