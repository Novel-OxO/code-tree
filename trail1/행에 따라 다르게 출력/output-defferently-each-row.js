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
        let cnt = 0;

        for(let i = 1; i <= n; i++) {
            let temp = '';
            
            if(i % 2 === 1) {
                for(let j = 1; j <= n; j++) {
                    cnt++;
                    temp += cnt + ' ';
                }
            } else {
                for(let j = 1; j <= n; j++) {
                    cnt += 2;
                    temp += cnt + ' ';
                }
            }
            console.log(temp);
        }
    }

    solve(readInput());
