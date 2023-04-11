const alpabet = 'abcdefghijklmnopqrstuvwxyz'
function solution(age) {
    const answer = age.toString().split('').map((el) => {
        return alpabet[el];
    }).join('');
    return answer;
}