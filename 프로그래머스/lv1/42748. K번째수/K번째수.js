function solution(array, commands) {
    const answer = [];
    commands.map((cur) => {
      let sliceArr = array.slice(cur[0] - 1 , cur[1]).sort((a , b) => a - b);
      answer.push(sliceArr[cur[2] - 1])
    })
    return answer;
}
