function solution(x) {
  let answer = true;
  let sum = String(x).split('').reduce((acc , cur) => {
    return Number(acc)+Number(cur)
  })
  
  return x % sum ===0
}