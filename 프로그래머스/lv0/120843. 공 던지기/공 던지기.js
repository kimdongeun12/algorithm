function solution(numbers, k) {
  const answer = ((k * 2) - 1) % numbers.length; 
  return answer !== 0 ? answer : numbers.length;
}