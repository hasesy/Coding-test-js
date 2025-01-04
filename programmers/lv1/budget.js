function solution(d, budget) {
  d.sort((a, b) => a - b);

  let remain = budget;

  for (let i = 0; i < d.length; i++) {
    if (remain < d[i]) return i;

    remain -= d[i];
  }

  return d.length;
}
