function solution(money) {
    const remainder = money % 5500;
    const amount = Math.floor(money / 5500);
    return [amount , remainder];
}