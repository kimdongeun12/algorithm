const inputData = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

function Solved(inputData) {
  for(let i = 1; i < inputData.length; i++){
    const data = inputData[i].split(' ').map(Number);
    const X = data[1];
    const Y = data[0];
    const customer = data[2];
    const floor = customer % Y !== 0 ? customer % Y : Y ;
    const room = String(Math.ceil(customer / Y)).padStart(2 , '0');
    // console.log('각 층의 가까운 순의 방을 입실하고 남은 손님의 수' , floor);
    // console.log('각 층의 가까운 입실한 층' , room);
    console.log(`${floor}${room}`)
  };
};

Solved(inputData);