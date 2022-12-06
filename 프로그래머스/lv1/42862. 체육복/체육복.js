function solution(n, lost, reserve) {
    const losted = [...lost]
    lost = lost.filter(student => reserve.includes(student) === false).sort((a,b) =>  a-b)
    reserve = reserve.filter(student => losted.includes(student) === false).sort((a,b) => a-b)
    // 체육복을 잃어버린 학생들의 수를 뺸 값을 초기값으로 저장
    // (== 체육수업을 들을 수 있는 학생의 수)
    let answer = n - lost.length;
    
    for(let i=0; i< lost.length; i++){
        // 잃어버린 학생의 앞 번호를 조회
        if(reserve.includes(lost[i]-1)){
            reserve.splice(reserve.indexOf(lost[i] - 1), 1)
            answer++;
        // 잃어버린 학생의 뒷 번호를 조회
        }else if(reserve.includes(lost[i]+1)){
            reserve.splice(reserve.indexOf(lost[i] + 1), 1)
            answer++;
        }
    }
    return answer
}