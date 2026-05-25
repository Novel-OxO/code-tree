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
    const input = raw.trim().split(' ').map(Number);
    const max = Math.max(...input.filter(x => x < 500))
    const min = Math.min(...input.filter(x => x > 500));

    console.log(`${max} ${min}`);
}

solve(readInput());
