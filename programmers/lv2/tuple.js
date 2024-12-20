function solution(s) {
  const result = [];

  // 중괄호({})를 대괄호([])로 replace() 후 JSON 파싱
  // 이후 배열길이 순서로 오름차순 정렬
  const tuples = JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']')).sort(
    (a, b) => a.length - b.length
  );

  // 중복 제거를 위해 Set 객체 생성
  const set = new Set();

  // 튜플 배열을 돌면서 result에 push
  for (let tuple of tuples) {
    for (let v of tuple) {
      if (!set.has(v)) {
        set.add(v);
        result.push(v);
      }
    }
  }

  return result;
}
