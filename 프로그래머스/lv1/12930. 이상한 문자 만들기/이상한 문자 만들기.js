function solution(s) {
    const answer = s.split(' ').map((el) => {
        const caseArr = el.split('').map((cur , idx) => {
          return idx % 2 === 0 ? cur.toUpperCase() : cur.toLowerCase()
        })
        return caseArr.join('')
    });
    console.log(answer)
    return answer.join(' ');
}