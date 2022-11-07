function solution(s) {
    let answer = '';
    if(parseInt(s.length/2) !== s.length/2){
        answer = s[parseInt(s.length/2)]
    }else{
        answer = s[parseInt(s.length/2) - 1] + s[parseInt(s.length/2)] 
    }
    return answer;
}