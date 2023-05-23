const inputData = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

const Solved = (inputData) => {
  const [ length , jackNum ] = inputData[0].split(' ');
  const numArr = inputData[1].split(' ');
  const combiArr = getCombinations(numArr , 3);
  const sumArr = combiArr.map((el) => {
    const sum = el.reduce((acc , cur) => acc + Number(cur) ,0);
    return sum <= jackNum ? sum : 0;
  });
  const answer = sumArr.sort((a , b) => a > b && -1);
  console.log(answer[0]);
};

const getCombinations = function (arr , selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((value) => [value]);
    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1); 
      const combinations = getCombinations(rest, selectNumber - 1);
      const attached = combinations.map((el) => [fixed, ...el]); 
      results.push(...attached); 
    });
    return results;
}

Solved(inputData);