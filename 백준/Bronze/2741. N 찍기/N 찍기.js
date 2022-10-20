const inputData = require('fs').readFileSync('dev/stdin').toString().trim().split(' ');

function Solved(inputData) {
    let result = ''
    for(let i = 1; i <= inputData; i++){
        result += `${i}\n`;
    }
    console.log(result)
};

Solved(inputData);