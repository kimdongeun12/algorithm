const solution = (X,Y) => {
  const numArr = [];
  const num1 = X.split('').reduce((acc , cur) =>  {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  },{});
  const num2 = Y.split('').reduce((acc , cur) =>  {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  },{});
  for(let key in num1) {
      if(!!num2[key]){
        let count = num1[key] >= num2[key] ? num2[key] : num1[key];
        for(let i = 0; i < count; i++){
          numArr.push(key);
        }
      }
  }
  const answer = numArr.sort((a , b) => b - a).join('');
  if(answer[0] === '0') return '0';
  return numArr.length > 0 ? answer : '-1';
}