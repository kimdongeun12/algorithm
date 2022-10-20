const inputData = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(Number);

function Solved(inputData) {
    let arr = [inputData[0] , inputData[1], Math.abs(inputData[0] - inputData[2]) , Math.abs(inputData[1] - inputData[3])]
    console.log(Math.min(...arr))
};

Solved(inputData);