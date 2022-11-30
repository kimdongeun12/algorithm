const answerTable = [
    // 1번 수포자가 찍는 방식
    [1, 2, 3, 4, 5], // 5개의 패턴
    // 2번 수포자가 찍는 방식
    [2, 1, 2, 3, 2, 4, 2, 5], // 8개의 패턴
    // 3번 수포자가 찍는 방식
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5] // 10개의 패턴
];

function solution(answers) {
    const score = [0,0,0] // 학생들의 점수를 저장하는 배열
    const answer = [];
    for(let i = 0; i< answers.length; i++){
        for(let j =0; j < answerTable.length; j++){
            if(answerTable[j][i % answerTable[j].length] === answers[i]){
                score[j]++
            }
        }
    }
    const max = Math.max(...score);
    score.filter((el,idx) => {
        if(max === el) {
            answer.push(idx + 1)
        }
    })
    return answer
    
}