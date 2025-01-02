function solution(num) {
  let count = 0;
  let result = num;

  if (num === 1) return 0;

  while (result !== 1) {
    if (count > 500) break;

    if (result % 2 === 0) {
      result = result / 2;
    } else {
      result = result * 3 + 1;
    }

    count++;
  }

  return count > 500 ? -1 : count;
}
