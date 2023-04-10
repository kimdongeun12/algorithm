const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    // console.log(Number(input[0]));
    const cnt = Number(input[0]);
    let answer = '';
    for(let i = 1; i <= cnt; i++) {
        for(let j = 1; j <= i; j++) {
            answer += '*';
        }
        answer += `\n`;
    }
    console.log(answer)
});