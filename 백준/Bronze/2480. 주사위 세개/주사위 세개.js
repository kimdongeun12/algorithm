const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split(' ').map(Number).sort();

function Solved(inputData) {
    const A = inputData[0];
    const B = inputData[1];
    const C = inputData[2];

    if(A == B && B == C){
        console.log(10000+(A*1000))
    }else if(A == B || B == C){
        console.log(1000+(B*100))
    }else{
        console.log(C*100)
    }

};

Solved(inputData);