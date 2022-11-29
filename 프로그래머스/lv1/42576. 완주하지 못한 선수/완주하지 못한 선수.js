function solution(participant, completion) {
    var answer = '';
    var a = participant.sort()
    var b = completion.sort()
    for(var i = 0; i<= a.length; i++)
    if(a[i] !== b[i]){
        answer = a[i]
        break
    }
    
    return answer;
}