const inputData = require('fs').readFileSync('dev/stdin').toString().trim().split(' ');

function Solved(inputData) {
    let reverseArr = inputData.map(cur => parseInt(cur.split("").reverse().join('')))
    reverseArr.sort()
    console.log(reverseArr.pop())
};

Solved(inputData);