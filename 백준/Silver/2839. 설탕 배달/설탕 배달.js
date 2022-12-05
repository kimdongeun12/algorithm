const inputData = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(Number);

function Solved(inputData) {
    let N = Number(inputData)
    let five = 0;
    let three = 0;
    
    while(true){
        if(N%5===0){
            five = N/5
            console.log(five + three)
            break
        }
        if(N<0){
            console.log(-1)
            break
        }
        N = N -3;
        three++;
    }
};

Solved(inputData[0]);