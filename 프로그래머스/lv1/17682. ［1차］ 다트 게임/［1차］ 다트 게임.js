const isBonus = ['S','D','T']
function solution(dartResult) {
//     let answer = 0;
//     let scoreArr = [];
//     let score = 0;
//     let sumScore = 0;
    
//     for(var i= 0; i < dartResult.length; i++){
//         if(dartResult[i] >= 0 && dartResult[i] <= 9){
//             if(!isNaN(dartResult[i]) && !isNaN(dartResult[i + 1])){
//                 score = Number(dartResult[i] + dartResult[i + 1]);
//                 i++;
//             }else{
//                 score = dartResult[i];
//             }
//         }else if(dartResult[i] == 'S'){
//             scoreArr.push(Math.pow(score, 1)); 
//         }else if(dartResult[i] == 'D'){
//             scoreArr.push(Math.pow(score, 2)); 
//         }else if(dartResult[i] == 'T'){
//             scoreArr.push(Math.pow(score, 3)); 
//         }else if(dartResult[i] == '*'){
//             scoreArr[scoreArr.length - 1] *= 2;
//             if(scoreArr[scoreArr.length - 2]){
//                 scoreArr[scoreArr.length - 2] *= 2;    
//             }
//         }else if(dartResult[i] == '#') {
//             scoreArr[scoreArr.length - 1] *= (-1);
//         };
//     }
    
    
//     scoreArr.forEach( (item) => {
//         answer += item
//     });
    
//     return answer;
//     const answer = [];
    
//     let score = ''; // 점수만 뽑아서 저장하는 변수
//     for(let i=0; i< dartResult.length; i++){
//         if(!isNaN(dartResult[i])){
//             // 숫자 타입으로 변환한 데이터의 결과가 NaN 값이 아닌 경우(= 숫자인 경우)
//             score += dartResult[i]
//             console.log(dartResult[i])
//         }else{
//             // 숫자 타입으로 변환한 데이터의 결과가 NaN 값인 경우(= S, D, T, *, #)
//             if(isBonus.includes(dartResult[i])){
//                 // S, D, T
//                 score = Number(score);
                
//                 if(dartResult[i] === 'D'){
//                     score = score ** 2 // score = score ** 2
//                 }else if (dartResult[i] === "T"){
//                     score = score ** 3 // score = score ** 3
//                 }
                
//                 answer.push(score);
//                 score = ''
//             }else {
//                 // * , #
//                 if(dartResult[i] === '#'){
//                     answer[answer.length - 1] *= -1
//                 }else{
//                     answer[answer.length - 1] *= 2
//                     if(answer.length > 1){
//                         answer[answer.length-2] *=2
//                     }
//                 }
//             }
//         }
//     }
//     return answer.reduce((acc,cur) => acc += cur)
    let score = ''
    let currentScore = 0; // 현재 게임(턴)의 점수를 저장
    let last = false // 점수를 최종 저장할 시점을 찾는 변ㄴ수
    
    const answer = dartResult.split('')
                             .reduce((acc, cur , i) => {
                                 if(!isNaN(cur)){
                                     score += cur;
                                     last = false; // 새 턴이 시작
                                 }else if(isBonus.includes(cur)){
                                     score = Number(score)
                                     const squared = isBonus.indexOf(cur) + 1;
                                     
                                     currentScore = score ** squared;
                                     score = '';
                                     
                                     if(!isNaN(dartResult[i+1]) || (i+1) === dartResult.length){
                                         last = true // 현재 턴이 종료되었다
                                     }
                                 }else{
                                     last = true;
                                     if(cur === '*'){
                                         currentScore *= 2;
                                         if(acc.length > 0) acc[acc.length-1] *= 2;
                                     }else {
                                         currentScore *= -1;
                                     }
                                 }
                                 if(last) {
                                     acc.push(currentScore);
                                 }
                                 return acc
                             } , []).reduce((acc,cur) => acc + cur)
    return answer
}