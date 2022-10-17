const inputData = require('fs').readFileSync("/dev/stdin").toString().split(" ");

function Solved(inputData) {
    console.log(inputData[0].charCodeAt(0));
};

Solved(inputData);