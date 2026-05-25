const fs = require('fs');
const path = require('path');

function readInput() {
    const localPath = path.join(__dirname, 'input.txt');
    if(fs.existsSync(localPath)) {
        return fs.readFileSync(localPath, 'utf8');
    }
    return fs.readFileSync(0, 'utf8');
}
// 입
function solve(raw) {
    const arr = raw.trim().split('\n')[1].split(' ').map(Number);
    let maxIndex = arr[0] > arr[1] ? 0 : 1;
    let secondMaxIndex = arr[0] > arr[1] ? 1 : 0;

    for(let i = 2; i < arr.length; i++) {
        if(arr[i] > arr[maxIndex]) {
            secondMaxIndex = maxIndex;
            maxIndex = i;
        }

        else if(arr[i] > arr[secondMaxIndex]) {
            secondMaxIndex = i;
        }
    }
    console.log(`${arr[maxIndex]} ${arr[secondMaxIndex]}`);
}

solve(readInput());
