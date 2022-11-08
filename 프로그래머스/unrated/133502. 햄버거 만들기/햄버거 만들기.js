function solution(ingredient) {
  let answer = 0;
  let arr = [];
  
  ingredient.forEach((cur) => {
    arr.push(cur);
    if(arr[arr.length - 4] === 1 && arr[arr.length - 3] === 2 && arr[arr.length - 2] === 3 && arr[arr.length - 1] === 1){
      arr.pop()
      arr.pop()
      arr.pop()
      arr.pop()
      answer++
    }
  })
  return answer
}