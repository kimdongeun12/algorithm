const solution = (brown, yellow) => {
  const answer = [0,0];
  const totalLength = brown + yellow;
  const temp = [];
  for(let i = 1; i <= totalLength; i++){
    if(totalLength % i === 0){
      const y = (i - 2) * ((totalLength / i) - 2);
      const b = totalLength - y;
      if(b === brown && y === yellow) {
        answer[0] = i
        answer[1] = (totalLength / i)
      }
    }
  }
  return answer;
}