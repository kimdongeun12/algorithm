const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString()

function Solved(inputData) {
    const A = parseInt(inputData);
    if(90 <= A){
        console.log('A');
    }else if(80 <= A){
        console.log('B');
    }else if(70 <= A){
        console.log('C');
    }else if(60 <= A){
        console.log('D');
    }else{
        console.log('F');
    }
};

Solved(inputData);