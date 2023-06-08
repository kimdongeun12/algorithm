const solution = (name, yearning, photo) => {
  const score = name.reduce((acc ,cur , idx) => {
    acc[cur] = yearning[idx];
    return acc;
  },{});
  const answer = photo.map((el) => {
    return el.reduce((acc ,cur) => {
      return acc += score[cur] || 0;
    },0);
  });
  return answer;
}