const fs = require('fs').readFileSync('/dev/stdin');
const inputData = fs.toString().trim().split('\n');

class Statistics {
  constructor(arr){
		this.array = [...arr];
    this.answer = [];
    // 첫째 줄에는 산술평균을 출력한다. 소수점 이하 첫째 자리에서 반올림한 값을 출력한다.
    this.avrage();
    // 둘째 줄에는 중앙값을 출력한다.
    this.center();
    // 셋째 줄에는 최빈값을 출력한다. 여러 개 있을 때에는 최빈값 중 두 번째로 작은 값을 출력한다.
    this.mode();
    // 넷째 줄에는 범위를 출력한다.
    this.range();
	}
  avrage() {
    const sum = this.array.reduce((acc ,cur) => acc + cur ,0);
    const average = Math.round(sum / this.array.length);
    this.answer.push(average !== 0 ? average : average * -1);
  }
  center(){
    const center = this.array[Math.floor(this.array.length / 2)];
    this.answer.push(center);
  }
  mode(){
    const reduceObj = this.array.reduce((acc , cur) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    },{});
    const maxNum = Math.max(...Object.values(reduceObj));
    const modeFilter = this.array.filter((el) => reduceObj[el] === maxNum);
    const setMode = Array.from(new Set(modeFilter));
    this.answer.push(setMode.length > 1 ? setMode[1] : setMode[0]);
  }
  range(){
    const range = this.array[this.array.length - 1] - this.array[0];
    this.answer.push(range);
  }
}

const Solved = (inputData) => {
  const [_ , ...data] = inputData.map(Number);
  const sortData = data.sort((a , b) => a - b);
  const statistics = new Statistics(sortData);
  console.log(statistics.answer.join('\n'))
};
Solved(inputData);
