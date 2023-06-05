
const multiple = (a , b) => {
  let aa = a; // 큰 수
  let bb = b; // 작은 수
  let rr = 0; // 큰 수를 작은 수로 나눴을 때의 나머지 값
  
  while(aa % bb > 0){
    rr = aa % bb;  // 1. 큰 수에서 작은 수를 나눈 나머지 값을 저장
    aa = bb;      //2. 큰 수를 나눴을 때의 작은 수를 가져온다.
    bb = rr;      //3. 작은 수에는 나머지 값을 가져온다.
  }
  return (a * b) / bb;
}

const solution = (arr) => {
  let answer = 0;
  for(let i =0; i < arr.length - 1; i++){
    if(i === 0) answer = arr[i];
    answer = multiple(answer , arr[i+1]);
  }
  return answer === 0 ? arr[0] : answer;
}