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
    const arr = raw.trim().split('\n')[1].split(' ').map(Number);
    let max = Number.MIN_SAFE_INTEGER;

    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] > arr[i]) {
                let diff = arr[j] - arr[i];
                if(diff > max) {
                    max = diff;
                }
            }
        }
    }
    console.log(max === Number.MIN_SAFE_INTEGER ? 0 : max);
}

solve(readInput());
