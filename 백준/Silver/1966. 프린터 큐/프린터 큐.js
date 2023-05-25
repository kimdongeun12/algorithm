const fs = require('fs').readFileSync('/dev/stdin');
const inputData = fs.toString().trim().split('\n');

class Stack {
	constructor(){
		this.queue = [];
    this.answer = [];
	}
  push(arr) {
    this.queue.push(...arr);
  }
  find(idx) {
    const findEl = this.queue[idx];
    let findIdx = idx;
    let currentIdx = 0;
    let count = 0;
    while(this.queue.length > 0) {
      const current = this.queue.shift();
      const temp = this.queue.filter((el) => el > current);
      if(temp.length > 0) {
        this.queue.push(current);
        if(findIdx === currentIdx) {
          findIdx += this.queue.length;
        }
      } else {
        count++
        if(findIdx === currentIdx) {
          this.answer.push(count);
          return;
        }
      }
      currentIdx++
    };
  }
  clear() {
    this.queue = [];
  }
}

const Solved = (inputData) => {
  const [_ , ...data] = inputData;
  const stack = new Stack();
  for(let i = 0; i < data.length / 2; i++){
    const arr = data[(i * 2) + 1].split(' ').map(Number);
    const findIdx = Number(data[i * 2].split(' ')[1]);
    stack.push(arr);
    stack.find(findIdx);
    stack.clear();
  }
  console.log(stack.answer.join('\n'))
};
Solved(inputData);

