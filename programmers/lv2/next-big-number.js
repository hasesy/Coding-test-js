function solution(n) {
  const count = n.toString(2).split('1').length - 1;

  const check = (num) => {
    const num_count = num.toString(2).split('1').length - 1;

    return num_count === count;
  };

  let answer = n + 1;
  while (!check(answer)) answer++;

  return answer;
}
