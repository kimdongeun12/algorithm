
function solution(a, b) {
  const DAYARR =['SUN','MON','TUE','WED','THU','FRI','SAT']
  const dateSet = `2016/${a}/${b}`
    const date = new Date(dateSet)
    return DAYARR[date.getDay()];
}