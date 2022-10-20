const inputData = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

function Solved(inputData) {
    for(let i = 0; i < inputData.length - 1; i++){
        let triangle = inputData[i].split(' ').map(Number);
        let sortArr = triangle.sort((a , b) => {
            return a- b;
        })
        let first = sortArr[0] * sortArr[0];
        let second = sortArr[1] * sortArr[1];
        let thrid = sortArr[2] * sortArr[2];

        console.log(first + second == thrid ? 'right' : 'wrong')
    }
};

Solved(inputData);