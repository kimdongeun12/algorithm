function solution(d, budget) {
//     d = d.sort((a,b) => a-b) // 오름차순
    
//     let answer = 0;
//     let sum = 0; // 부서들이 신청한 금액의 총 합
//     for(let i = 0; i<d.length; i++){
//         sum += d[i];
//         if(sum <= budget) answer++;
//     }
//     return answer;
    
    // while(budget - d[answer] >= 0) {
    //     console.log(budget, d[answer], answer)
    //     budget -= d[answer]
    //     answer++;
    // }
    // return answer
    const answer = d.sort((a,b) => a-b)
                    .filter(money => {
                        budget -= money
                        return budget >=0;
                    })
    return answer.length
}