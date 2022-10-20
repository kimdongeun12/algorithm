const inputData = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');


function Solved(inputData) {
    for(let i = 1; i<= inputData[0]; i++){
        let result = '';
        let splitData = inputData[i].split(' ');
        for(let j = 0; j < splitData[1].length ; j++ ){
            for(let c = 0; c < splitData[0]; c++){
                result += splitData[1][j];
            }
        }
        console.log(result);
    }
};

Solved(inputData);