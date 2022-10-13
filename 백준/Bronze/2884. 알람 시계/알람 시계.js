const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split(' ');

function Solved(inputData) {
    let A = parseInt(inputData[0]);
    let B = parseInt(inputData[1]);

    if(A === 0){
        A = 24;
    }
    
    let Time = (A * 60) + B;

    let Hour = (Math.floor((Time - 45) / 60)) === 24 ? 0 : (Math.floor((Time - 45) / 60));
    let Min = (Time - 45) % 60;
    console.log(Hour , Min);
};

Solved(inputData);