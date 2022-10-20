const inputData = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(Number);


function Solved(inputData) {
    let arr = new Array(10).fill(0);
    let redup = {};
    let multip = inputData.reduce((acc , cur) => {
        return acc * cur;
    });
    multip.toString().split('').forEach((x) => { 
      redup[x] = (redup[x] || 0)+1;
    });
    arr.map((cur, idx) => {
        if(idx in redup){
            arr[idx] = redup[idx];
        }
    })
    console.log(arr.join().replaceAll(',' , '\n'))
};

Solved(inputData);