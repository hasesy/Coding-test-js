function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) answer += i;
  }

  return answer;
}

// 다른 풀이
// function solution(n) {
//     const squareRoot = Math.sqrt(n);
//     let answer = 0;

//     if (n === 1) return 1;

//     for (let i = 1; i <= squareRoot; i++) {
//         if (n % i === 0) {
//             answer += i;
//             if (i !== n / i) {
//                 answer += n / i;
//             }
//         }
//     }

//     return answer;
// }
