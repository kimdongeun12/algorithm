function solution(n) {
    // const three = n.toString(3).split('').reverse().join('');
    // return Number.parseInt(three,3);
    
    // // 1. 3진법으로 변환
    // n = n.toString(3)
    // // 2. 앞뒤 반전(뒤집기)
    // let reverse = '';
    // for(let i = n.length-1; i >=0; i--){
    //     reverse += n[i]
    // }
    
    n = n.toString(3)
         .split('')
         .reverse()
         .join('')
    
    return parseInt(n,3)
}