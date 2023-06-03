const solution = (t,p) => {
  const arr = []
  for(let i = 0; i <= t.length - p.length; i++){
    arr.push(Number(t.slice(i,i+p.length)));
  };
  const answer = arr.filter((el) => el <= Number(p));
  return answer.length;
}
