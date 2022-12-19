const filter = 'qwertyuiopasdfghjklzxcvbnm1234567890-_.';

function solution(new_id) {
//     let answer = new_id.toLocaleLowerCase() 
//                         .replace(/[^\.a-z0-9-_]/g, '') 
//                         .replace(/\.+/g, '.') 
//                         .replace(/^\.|\.+$/, ''); 


//     if (answer == "") answer = 'a';
    
//     answer = answer.slice(0, 15).replace(/\.+$/, ''); 

//     if(answer.length >= 3){
//         return answer
//     }else{
//         return answer.padEnd(3, answer[answer.length - 1]);
//     }
    // // 1단계 : 대문자를 소문자로 치환
    // new_id = new_id.toLowerCase();
    // // 2단계 : 알파벳, 소문자, 숫자 , 빼기(-),밑줄(_), 마침표(.)를 제외한 모든 문자를 제거
    // let answer = '';
    // for(let i =0; i<new_id.length; i++){
    //     if(filter.includes(new_id[i])) answer += new_id[i]
    // }
    // // 3단계 : 마침표(.)가 2번이상 연속 된다면, 하나의 마침표로 치환
    // while(answer.includes('..')){
    //     answer = answer.replace('..','.')
    // }
    // // 4단계 : 마침표가(.)가 처음이나 끝에 위치한다면 제거
    // if(answer[0]=== '.')answer = answer.substr(1)
    // function removeLstDot(){
    //     if(answer[answer.length-1] === '.') answer = answer.substr(0, answer.length-1) 
    // }
    // removeLstDot()
    // // 5단계 : 빈 문자열이라면, 'a'를 대입
    // if(answer.length === 0){ // answer === ''
    //     answer = 'a'
    // }
    // // 6단계 : 길이가 16자 이상일 때 15자까지 제거
    // //        제거 후에 마침표가 끝에 위치한다면 마침표 제거
    // if(answer.length >= 16){
    //     answer = answer.substr(0, 15)
    //     removeLstDot()
    // }
    // // 7단계 : 문자열 길이가 2글자 이하라면, 마지막 글자를 3글자가 될 때까지 반복해서 붙인다.
    // if(answer.length <= 2) answer = answer.padEnd(3,answer[answer.length-1])
    // return answer
    
    // 1단계 : 대문자를 소문자로 치환
    new_id = new_id.toLowerCase().split('');
    // 2단계
    let answer = new_id.filter(str => {
        return filter.includes(str)
    })
    // 3단계
    answer = answer.filter((str,i) => {
        return (str === '.' && answer[i+1] !== '.') || str !== '.'
    })
    // 4단계
    if(answer[0] === '.') answer = answer.slice(1);
    function removeLstDot(){
        if(answer[answer.length-1] === '.') answer = answer.slice(0, answer.length-1) 
    }
    removeLstDot()
    // 5단계
    if(answer.length === 0) answer.push('a') // answer =['a']
    // 6단계
    if(answer.length >= 16){
        answer = answer.slice(0,15);
        removeLstDot()
    }
    // 7단계
    if(answer.length <= 2){
        const add = new Array(3-answer.length).fill(answer[answer.length-1])
        answer = answer.concat(add) // answer = [...answer, ...add]
    }
    return answer.join('')
}