
function solution(today, terms, privacies) {
    const todays = new Date(today);
    const answer = [];
    const tremsObj = terms.reduce((acc , cur) => {
        const splitArr = cur.split(' ');
        acc[splitArr[0]] = Number(splitArr[1]);
        return acc;
    }, {})
    
    privacies.forEach((el , idx) => {
        const splitArr = el.split(' ');
        const dateArr = splitArr[0].split('.');
        const prDate = new Date(dateArr);
        prDate.setMonth(prDate.getMonth() + tremsObj[splitArr[1]]);
        
        if (prDate <= todays) answer.push(idx + 1);
    })
    
    return answer;
}