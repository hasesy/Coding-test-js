// 좋은 풀이
function solution(dartResult) {
  const bonus = { S: 1, D: 2, T: 3 },
    options = { '*': 2, '#': -1, undefined: 1 };

  let darts = dartResult.match(/\d.?\D/g);

  for (let i = 0; i < darts.length; i++) {
    let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
      score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

    if (split[3] === '*' && darts[i - 1]) darts[i - 1] *= options['*'];

    darts[i] = score;
  }

  return darts.reduce((a, b) => a + b);
}

// 첫 풀이
// function solution(dartResult) {
//   const answer = [];
//   const roundSplitRegex = /\d+[a-zA-Z][^a-zA-Z0-9]?/g; // 기회별로 나누는 정규표현식
//   const result = dartResult.match(roundSplitRegex);
//   console.log(result);

//   for (let i = 0; i < result.length; i++) {
//     const scoreDetailRegex = /\d+|[a-zA-Z]+|[^a-zA-Z0-9]/g;
//     const once = result[i].match(scoreDetailRegex);
//     answer[i] = parseInt(once[0]);

//     if (once[1] === 'T') answer[i] **= 3;
//     if (once[1] === 'D') answer[i] **= 2;

//     if (once.length === 3) {
//       if (once[2] === '*') {
//         answer[i] *= 2;
//         answer[i - 1] *= 2;
//       } else answer[i] *= -1;
//     }
//   }
//   console.log(answer);
//   return answer.reduce((a, b) => a + b);
// }
