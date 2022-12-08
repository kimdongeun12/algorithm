function solution(N, stages) {
//     let answer = [];
//     let ratioUses = []
//     let users = stages.length;
    
//     for(var i= 1; i <= N; i++){
//         let notComplet = stages.filter(cur => i === cur).length;
//         let ratio = notComplet/users;
//         users -= notComplet
//         ratioUses.push({stage: i , ratio : ratio})
//     }
//     ratioUses.sort(function(a, b){
//         return b.ratio - a.ratio
//     })
//     ratioUses.map((accr) => {
//         answer.push(accr.stage);
//     });
//     return answer;
    
    // 모든 스테이지의 번호를 오름차순 형태로 정렬
//     stages.sort((a,b) => a-b);
    
    
//     const failArr = []; // 스테이지에 해당되는 유저 수 , 실패율을 저장하는 배열
//     for(let i = 1; i<= N; i++){
//         failArr.push({'stage' : i, // 스테이지 번호
//                       'users':0, // 클리어 하지 못한 유저수
//                       'fail':0 // 실패율
//                      })
//     }
//     let allUsers = stages.length; // 모든 유저의 수 (초기값)
//     for(let i= 0; i<stages.length; i++){
//         if(failArr[stages[i]-1] !== undefined){
//             failArr[stages[i] - 1].users++
//             // 현재 스테이지의 번호와 다음 스테이지의 번호가 동일하지 않다면
//             // === 현재 스테이지의 유저 합산이 완료되는 시점
//             if(stages[i] !== stages[i+1]){
//                 const fail = failArr[stages[i] - 1].users / allUsers
//                 allUsers -= failArr[stages[i] - 1].users;
                
//                 failArr[stages[i] - 1].fail = fail
//             }
//         }
//     }
//     const answer = failArr.sort((a,b) => b.fail-a.fail) // 실패율 기준 내림차순
//                           .map((el) => el.stage)
//     return answer
    stages.sort((a,b) => a-b);
    let allUsers = stages.length;
    const answer = new Array(N).fill(1)
                               .map((num , i) => {
                                   const stage = num + i;
                                   const arr = stages.slice(stages.indexOf(stage) , stages.lastIndexOf(stage) + 1);
                                   
                                   const fail = arr.length / allUsers
                                   allUsers -= arr.length;
                                   
                                   return {stage,fail}
                               }).sort((a,b) => b.fail - a.fail)
                                 .map(el => el.stage)
    return answer
}