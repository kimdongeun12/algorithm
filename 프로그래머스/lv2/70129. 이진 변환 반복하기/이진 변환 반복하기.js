function solution(s) {
    let count = 0; //  변환 횟수
    let remove = 0; // 제거된 0의 개수
    
    // 1이라면 반복문을 종료, 아니라면 반복문을 계속 실행
    while( s !== '1' ) {
        count++;
        // 1. 0을 제거
        let temp = '';
        for(let i = 0; i< s.length; i++){
            if(s[i] === '0'){
                remove++;
                continue;
            }
            temp += s[i];
        }
        s = temp.length; // 2. 0을 제거한 후 길이
        s = s.toString(2); // 3. 이진 변환
    }
    
    return [count , remove]
}