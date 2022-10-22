const inputData = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

function Solved(inputData) {
    inputData.shift();
    let numArr = inputData;
    let sortArr = numArr.sort((a , b) => {
        return a- b;
    })
    console.log(sortArr.join().replaceAll(',' , '\n'))
};

Solved(inputData);