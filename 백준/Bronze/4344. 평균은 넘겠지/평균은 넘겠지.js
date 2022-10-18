const inputData = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

function Solved(inputData) {
    for(let i = 1; i <= inputData[0]; i++){
        let newArr = inputData[i].trim().split(' ').map(Number);
        let sum = newArr.reduce((acc , cur) => {return acc + cur});
        let average = (sum - newArr[0]) / newArr[0];
        let cnt = newArr.filter((cur , arr) => {
            if(cur > average){
                return arr;
            }
        });
        console.log(`${(cnt.length/newArr[0] * 100).toFixed(3)}%`)
    }
};

Solved(inputData);