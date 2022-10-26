const inputData = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(Number);

function Solved(inputData) {
    inputData.shift();
    inputData.reverse();
    let cnt = 0;
    let maxNum = 0;
    inputData.map((cur) => {
        if(maxNum < cur){
            maxNum = cur;
            cnt++
        }
    });
    console.log(cnt);
};

Solved(inputData);