const inputData = require('fs').readFileSync('dev/stdin').toString().split('\n');

function Solved(inputData) {
    let newArr = inputData[1].split('').map(Number);
    let sumNum = newArr.reduce((acc , cur)=>{return acc + cur})
    console.log(sumNum)
};

Solved(inputData);