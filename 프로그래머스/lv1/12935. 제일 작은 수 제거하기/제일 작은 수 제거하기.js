function solution(arr) {
    const minNum = Math.min(...arr);
  const answer = arr.filter(cur => {
    return cur !== minNum && cur
  })
    return answer.length !== 0 ? answer : [-1];
}