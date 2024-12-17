function solution(answers) {
  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const result = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (first[i % first.length] === answers[i]) result[0]++;
    if (second[i % second.length] === answers[i]) result[1]++;
    if (third[i % third.length] === answers[i]) result[2]++;
  }

  const max = Math.max(...result);
  const answer = [];

  result.forEach((num, idx) => {
    if (num === max) answer.push(idx + 1);
  });

  return answer;
}
