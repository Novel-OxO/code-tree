const fs = require('fs');
const path = require('path');

function readInput() {
    const localPath = path.join(__dirname, 'input.txt');
    if(fs.existsSync(localPath)) {
        return fs.readFileSync(localPath, 'utf8');
    }
    return fs.readFileSync(0, 'utf8');
}

// 감기 증상이 있으면 Y. 감기 증상이 없으면 N.
// 증상도 있고 37도 이상이면 A
// 증상은 없지만 37도 이상이면 B
// 증상은 있지만 37도 미만이면 C
// 증상도 없고 37도 미만이면 D
// 3명중 A로 가는 사람이 2명 이상이면 E
function solve(raw) {
    let inputs = raw.trim().split('\n');
    let array = Array(4).fill(0);
    for(let input of inputs) {
        let [yn, temp] = input.split(' ');
        let code = checkSymptom(yn, parseFloat(temp));
        array[code.charCodeAt(0) - 'A'.charCodeAt(0)]++;
    }

    let temp = array.join(' ');
    if(array[0] >= 2) {
        temp += ' E';
    }
    console.log(temp);
}

function checkSymptom(yn, temp) {
    if(yn === 'Y' && temp >= 37) {
        return 'A';
    } else if(yn === 'N' && temp >= 37) {
        return 'B';
    } else if(yn === 'Y' && temp < 37) {
        return 'C';
    } else {
        return 'D';
    }
}

solve(readInput());
