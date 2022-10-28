const inputData = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(Number);


function Solved(inputData) {
    for(let i=1; i<= 30; i++){
        if(!inputData.includes(i)){
            console.log(i)
        }
    }
    
};

Solved(inputData);