const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split('\n');

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

const BSplit = B.toString().split('');

for(let i = BSplit.length - 1; i >= 0; i-- ){
    console.log(BSplit[i] * A);
    if(i === 0){
        console.log(A*B);
    }
}
