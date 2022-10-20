const inputData = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(Number);


function Solved(inputData) {
    let sum = inputData.map(cur => cur * cur);
    let verification = sum.reduce((acc , cur) => {
        return acc + cur;
    })
    console.log(verification % 10)
};

Solved(inputData);