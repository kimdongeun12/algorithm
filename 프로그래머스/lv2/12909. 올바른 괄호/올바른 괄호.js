function solution(s){
    // while(s.includes('()')){
    //     s = s.replaceAll('()','')
    // }
    // return s.length === 0;
    
    const stack = [];
    for(let item of s){
        if(item === '(') {
            stack.push(item);
        }else{
            if(stack.length === 0) return false;
            stack.pop();
        }
    }
    return stack.length === 0;
}