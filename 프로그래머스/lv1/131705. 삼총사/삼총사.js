const solution = (number) => {
  const answer = number.reduce((acc ,cur , idx) => {
    for(let i = idx + 1; i < number.length; i++){
      for(let j = i + 1; j < number.length ; j++){
        if(cur + number[i] + number[j] === 0){
          acc.push('1');
        }
      };
    }
    return acc
  },[]);
  return answer.length;
}