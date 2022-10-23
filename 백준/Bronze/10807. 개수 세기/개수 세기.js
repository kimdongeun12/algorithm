const inputData = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

function Solved(inputData) {
    let arr = inputData[1].split(' ').map(Number);
    let findArr = [];
    arr.forEach((cur) => {
        if(cur == inputData[2]){
            findArr.push(cur);
        };
    });
    console.log(findArr.length);
};

Solved(inputData);