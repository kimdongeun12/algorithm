const inputData = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

function Solved(inputData) {
    let arr = inputData.split(' ').map(Number);
    let decimal = []
    arr.map((cur) => {
        if(cur === 1){
            return false;
        }

        for(let i = 2; i <= Math.floor(Math.sqrt(cur)); i++){
            if(cur % i === 0){
              return false; 
            }
        }
        decimal.push(cur)
    })
    console.log(decimal.length)
};

Solved(inputData[1]);