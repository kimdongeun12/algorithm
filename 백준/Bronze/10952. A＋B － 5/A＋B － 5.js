const inputData = require('fs').readFileSync("/dev/stdin").toString().split("\n");

function Solved(inputData) {
    for(let i = 0; i < inputData.length - 2; i++){
        let numSplit = inputData[i].split(' ');
        console.log(parseInt(numSplit[0]) + parseInt(numSplit[1]));
    }
};

Solved(inputData);