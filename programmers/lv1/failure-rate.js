function solution(N, stages) {
  const stageFailureRate = {};

  for (let i = 1; i <= N; i++) {
    const participants = stages.filter((stage) => stage >= i).length;
    const fail = stages.filter((stage) => stage === i).length;
    const failureRate = fail / participants;
    stageFailureRate[i] = failureRate;
  }

  const result = Object.entries(stageFailureRate)
    .sort(([, a], [, b]) => b - a)
    .reduce((acc, [stage]) => [...acc, +stage], []);

  return result;
}
