const inputData = require('fs').readFileSync('dev/stdin').toString().trim().split(' ');


function Solved(inputData) {
    let result = ''
    for(let i = inputData[0]; i >= 1; i--){
        result += `${i}\n`;
    }
    console.log(result)
};

Solved(inputData);