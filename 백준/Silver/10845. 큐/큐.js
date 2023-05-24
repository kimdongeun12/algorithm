const fs = require('fs').readFileSync('/dev/stdin');
const inputData = fs.toString().trim().split('\n');

class Stack {
	constructor(maxSize){
		this.queue = [];
    this.answer = [];
	}
  push(num) {
    this.queue.push(num);
  }
  pop() {
    // 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
    const shift = this.queue.shift();
    this.answer.push(shift || -1);
  }
  size() {
    // 스택에 들어있는 정수의 개수를 출력한다.
    const size = this.queue.length;
    this.answer.push(size);
  }
  empty() {
    // 스택이 비어있으면 1, 아니면 0을 출력한다
    const size = this.queue.length;
    this.answer.push(size === 0 ? 1 : 0);
  }
  front() {
    // 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
    const first = this.queue[0];
    this.answer.push(first || -1);
  }
  back() {
    // 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
    const last = this.queue[this.queue.length - 1];
    this.answer.push(last || -1);
  }
}

const Solved = (inputData) => {
  const [_, ...inputs] = inputData;
  const stack = new Stack();
  inputs.forEach((el) => {
    const [method , arg] = el.split(' ');
    if(arg) {
      stack[method](Number(arg));
    } else {
      stack[method]();
    }
  });
  console.log(stack.answer.join('\n'))
};
Solved(inputData);

