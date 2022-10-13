const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split(' ');
const inputSecondData = inputData[1].split('\n');

function Solved(inputData) {
    
    let A = parseInt(inputData[0]);
    let B = parseInt(inputSecondData[0]);
    let C = parseInt(inputSecondData[1]);

    if(A === 0){
        A = 24;
    }
    
    let Time = (A * 60) + (B + C);

    let Hour = Math.floor(Time / 60) % 24;
    let Min = Time % 60;
    console.log(Hour , Min);
};

Solved(inputData);