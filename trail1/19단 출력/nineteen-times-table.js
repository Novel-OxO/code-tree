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
    let temp = '';

    for(let i = 1; i <= 19; i++) {

        for(let j = 1; j <= 19; j++) {
            if(j % 2 === 1) {
                if(j !== 19) {
                    temp += `${i} * ${j} = ${i * j} / `;
                } else {
                    temp += `${i} * ${j} = ${i * j}\n`;
                }
            } else {
                temp += `${i} * ${j} = ${i * j}\n`;
            }
        }
    }
    console.log(temp);
}

solve(readInput());
