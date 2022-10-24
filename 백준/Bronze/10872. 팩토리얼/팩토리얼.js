const inputData = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(Number);

function Solved(inputData) {
    if(inputData < 1){
        return  1;
    }else{
        return inputData * Solved(inputData - 1)
    }
};

console.log(Solved(inputData[0]));
