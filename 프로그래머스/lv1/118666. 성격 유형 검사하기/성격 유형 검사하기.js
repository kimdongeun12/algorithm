function solution(survey, choices) {
    const table = {R : 0,T : 0, C : 0,F : 0, J : 0,M : 0, A : 0,N : 0};
    const result = [];
    survey.forEach((el , idx) => {
        if(choices[idx] === 4) return; // 시간초과 이슈 , 4번을 선택하면 루프 X
        const selectArr = changePoint(el , choices[idx]);
        table[selectArr[0]] += selectArr[1];
    });
    result[0] = table.R >= table.T ? 'R' : 'T';
    result[1] = table.C >= table.F ? 'C' : 'F';
    result[2] = table.J >= table.M ? 'J' : 'M';
    result[3] = table.A >= table.N ? 'A' : 'N';
    return result.join('');
}
const changePoint = (survey , choices) => {
    const arr = ['', 0];
    const textArr = survey.split('');
    arr[0] = textArr[choices > 4 ? 1 : 0];
    arr[1] = Math.abs(choices - 4);
    return arr;
}