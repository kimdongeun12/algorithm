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
    const pop = this.queue.pop();
    this.answer.push(pop || -1);
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
  top() {
    // 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
    const top = this.queue[this.queue.length - 1];
    this.answer.push(top || -1);
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

