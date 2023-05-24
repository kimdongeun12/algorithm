const fs = require('fs').readFileSync('/dev/stdin');
const inputData = fs.toString().trim().split('\n');

const Solved = (inputData) => {
  const [_, input1 , __, input2 ] = inputData;
  const cards = input1.split(' ').map(Number);
  const hasCards = input2.split(' ').map(Number);
  const getObj = cards.reduce((acc ,cur) => {
    acc[cur] = (acc[cur]|| 0) + 1;
    return acc;
  } , {});
  const answer = hasCards.map((el) => {
    return getObj[el] ? getObj[el] : 0
  });
  console.log(answer.join(' '))
};
Solved(inputData);
