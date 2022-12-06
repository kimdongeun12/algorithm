function solution(n, lost, reserve) {
    const losted = [...lost]
    lost = lost.filter(student => reserve.includes(student) === false).sort((a,b) =>  a-b)
    reserve = reserve.filter(student => losted.includes(student) === false).sort((a,b) => a-b)
    // 체육복을 잃어버린 학생들의 수를 뺸 값을 초기값으로 저장
    // (== 체육수업을 들을 수 있는 학생의 수)
    let answer = n - lost.length;
    
    lost.forEach(student => {
        // 앞에있는 학생의 인덱스 값 번호 저장
        const prev = reserve.indexOf(student - 1)
        // 뒤에있는 학생의 인덱스 값 번호 저장
        const next = reserve.indexOf(student + 1)
        if(prev !== -1){
            // 앞에있는 학생이 여벌 체육복을 가져왔을 경우
            answer++
            reserve.splice(prev,1)
        }else if(next !== -1){
            // 앞에있는 학생이 여벌 체육복을 가져왔을 경우
            answer++
            reserve.splice(next,1)
        }
        console.log(student, reserve, prev, next)
    })
    
    // for(let i=0; i< lost.length; i++){
    //     // 잃어버린 학생의 앞 번호를 조회
    //     if(reserve.includes(lost[i]-1)){
    //         reserve.splice(reserve.indexOf(lost[i] - 1), 1)
    //         answer++;
    //     // 잃어버린 학생의 뒷 번호를 조회
    //     }else if(reserve.includes(lost[i]+1)){
    //         reserve.splice(reserve.indexOf(lost[i] + 1), 1)
    //         answer++;
    //     }
    // }
    return answer
}