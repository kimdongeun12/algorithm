function solution(s) {
    let answer = [];
    
    const arrSplit = s.split('').reduce((acc,cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc
    },{});
    
    for(let key in arrSplit){
        if(arrSplit[key] === 1){
            answer.push(key)
        }
    }
    
    return answer.sort().join('');
}