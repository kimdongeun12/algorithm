const inputData = require('fs').readFileSync(0, 'utf8').toString().split('\n').map(Number);


function Solved(inputData) {
    let maxNum = Math.max(...inputData) 
    console.log(`${maxNum}\n${inputData.indexOf(maxNum) + 1}`)
};

Solved(inputData);