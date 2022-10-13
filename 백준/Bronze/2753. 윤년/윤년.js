const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString();


function Solved(inputData) {
    const A = parseInt(inputData);
    if(A % 4 === 0 && A % 100 !== 0 || A % 400 === 0){
        console.log(1);
    }else{
        console.log(0);
    }
};

Solved(inputData);