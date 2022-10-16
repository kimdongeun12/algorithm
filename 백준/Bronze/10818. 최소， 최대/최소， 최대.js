const inputData = require('fs').readFileSync(0, 'utf8').toString().split('\n');

function Solved(inputData) {
    const Arr = inputData[1].split(' ').map(Number);
    console.log(Math.min(...Arr) , Math.max(...Arr))
};

Solved(inputData);