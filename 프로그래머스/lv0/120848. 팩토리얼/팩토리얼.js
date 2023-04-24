function solution(n) {
  let answer = 0;
  let num = n;
  while(num / answer > 1) {
    answer++;
    num = Math.floor(num / answer);
  }
  return answer;
}
