// case1
// const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

// case2
const lower = 'abcdefghijklmnopqrstuvwxyz'; // 소문자 알파벳만 저장
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // 대문자 알파벳만 저장

function solution(s, n) {
    // const charArr = s.split('').map((el) => {
    //     let code = el
    //     if(code !== ' '){
    //         let charCode = el.charCodeAt();
    //         let tempNum = 0
    //         if(charCode < 90){
    //             tempNum = charCode - 65
    //         }else{
    //             tempNum = charCode - 97
    //         }
    //         console.log(tempNum)
    //         code = String.fromCharCode(charCode)
    //     }  
    //     return code
    // })
    // return charArr.join('')
    
    // case1
    // let answer = '';
    // for(let i=0; i<s.length;i++){
    //     if(s[i] === ' ') {
    //         answer += s[i] // ' '
    //     }else {
    //         let idx = alphabet.indexOf(s[i])
    //         const word = idx > 25 ? alphabet.slice(26, alphabet.length)
    //                               : alphabet.slice(0, 26);
    //         idx = word.indexOf(s[i]) + n;
    //         if(idx >= 26){
    //             idx -= 26
    //         }
    //         answer += word[idx]
    //     }
    // }
    // return answer
    
    //case2
    
//     let answer = '';
    
//     for(let i=0; i< s.length; i++){
//         if(s[i] === ' '){
//             answer += s[i]
//         }else{
//             const word = lower.includes(s[i]) ? lower
//                                               : upper
//             let index = word.indexOf(s[i]) + n
//             if(index >= 26){
//                 index -=26
//             }
//             answer += word[index]
//         }
//     }
//     return answer
    
//     case 3
    const answer = s.split('')
                    .reduce((acc , cur) => {
                        const word = lower.includes(cur) ? lower : upper
                        let idx = word.indexOf(cur) + n
                        if(idx >= 26){
                            idx -=26
                        }
                        
                        return acc + (cur === ' ' ? ' ' : word[idx])
                    }, '')
    return answer
}