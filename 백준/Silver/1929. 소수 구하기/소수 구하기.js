const inputData = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(Number);

function Solved(inputData) {
    let answer = ``;
    for(let i = inputData[0]; i <= inputData[1]; i++){
    	if(isPrime(i)){
            answer += `${i}\n`
        }
    }
    console.log(answer)
};


function isPrime(num) {
  if(num <= 1) {
    return false;
  }
  if( num % 2 === 0) { 
    return num === 2 ? true : false;
  }
  const sqrt = parseInt(Math.sqrt(num));
  for( let divider = 3; divider <= sqrt; divider += 2) {
    if(num % divider === 0) {
      return false;
    }
  }
  
  return true;
}

Solved(inputData);