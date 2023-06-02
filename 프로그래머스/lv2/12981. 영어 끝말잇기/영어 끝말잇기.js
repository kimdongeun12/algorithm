const solution = (n, words) => {
  const answer = [0,0];
  const temp = [];
  let turn = 1;
  let cnt = 0;
  while(words.length > 0) {
    const word = words.shift();
    const lastWord = temp[temp.length - 1];
    const filter = temp.filter((el) => el === word);
    turn = (cnt % n) + 1;
    cnt++;
    if(!!lastWord) {
      if(filter.length > 0) {
        answer[0] = turn;
        answer[1] = Math.ceil(cnt / n);
        break
      }
      if(lastWord[lastWord.length - 1] !== word[0]){
        answer[0] = turn;
        answer[1] = Math.ceil(cnt / n);
        break
      }
    }
    temp.push(word);
  }
  return answer
}