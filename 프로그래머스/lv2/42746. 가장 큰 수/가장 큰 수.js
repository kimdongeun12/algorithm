function solution(numbers) {
  if(Math.max(...numbers) === 0) return '0'
  const answer = numbers.map(String).sort((a , b) => (b + a)-(a + b)).join("");
  return answer;
}