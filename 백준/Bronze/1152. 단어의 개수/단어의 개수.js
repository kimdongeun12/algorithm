const inputData = require('fs').readFileSync('dev/stdin').toString().trim().split(' ');

function Solved(inputData) {
    console.log(inputData[0] === '' ? 0 : inputData.length)
};

Solved(inputData);