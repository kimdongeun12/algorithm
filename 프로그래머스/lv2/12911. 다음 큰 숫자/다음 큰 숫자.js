function solution(n) {
    let answer = 0;
    let count = 0;
    let binary = n.toString(2).split('1');
    while(true) {
      count++;
      const num = (n + count).toString(2);
      if(binary.length === num.split('1').length) {
        return parseInt(num,2);
      }
    }
}
solution(15);