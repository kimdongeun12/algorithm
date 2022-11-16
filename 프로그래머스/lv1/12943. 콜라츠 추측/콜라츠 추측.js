function solution(num) {
  let cnt = 0;
  while(num !== 1){
    num % 2 === 0 ? num = num / 2 : num = num * 3 + 1
    cnt++
    if(cnt >= 500) return cnt = -1
  }
  return cnt;
}