const solution = (a,b,n) => {
  let answer = 0;
  let remine = 0;
  while(a <= n){
    answer += (Math.floor(n / a) * b);
    remine = n % a;
    n = (Math.floor(n / a) * b) + remine;
  }
  return answer;
}