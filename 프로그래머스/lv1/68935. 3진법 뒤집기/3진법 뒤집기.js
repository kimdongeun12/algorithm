function solution(n) {
    const three = n.toString(3).split('').reverse().join('');
    return Number.parseInt(three,3);
}