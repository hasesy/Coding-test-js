function solution(n) {
  let isPrime = new Array(n + 1).fill(true);
  let count = 0;

  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) {
      count += 1;
      for (let j = 2 * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }
  return count;
}
