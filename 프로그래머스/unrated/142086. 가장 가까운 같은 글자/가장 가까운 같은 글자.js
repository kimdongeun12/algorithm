const solution = (s) => {
  const answer = s.split('').map((mapEl , idx , arr) => {
    const findIdx = arr.slice(0,idx).lastIndexOf(mapEl);
    return findIdx === -1 ? findIdx : idx - findIdx;
  });
  return answer;
}