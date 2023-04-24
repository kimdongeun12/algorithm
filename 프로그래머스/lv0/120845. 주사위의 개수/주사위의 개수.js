function solution(box, n) {
  const num1 = Math.floor(box[0] / n);
  const num2 = Math.floor(box[1] / n);
  const num3 = Math.floor(box[2] / n);
  return (num1 * num2) * num3;
}