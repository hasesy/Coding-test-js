function solution(survey, choices) {
  let answer = '';
  const obj = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  const aplph = survey.map((v, i) => {
    if (choices[i] > 4) obj[v.substring(1, 2)] += choices[i] - 4;
    if (choices[i] < 4) obj[v.substring(0, 1)] += 4 - choices[i];
  });

  obj['R'] >= obj['T'] ? (answer += 'R') : (answer += 'T');
  obj['C'] >= obj['F'] ? (answer += 'C') : (answer += 'F');
  obj['J'] >= obj['M'] ? (answer += 'J') : (answer += 'M');
  obj['A'] >= obj['N'] ? (answer += 'A') : (answer += 'N');

  return answer;
}
