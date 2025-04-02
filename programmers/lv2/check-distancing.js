function solution(places) {
  const answer = [];
  const dy = [1, 0, -1, 0];
  const dx = [0, 1, 0, -1];

  for (place of places) {
    let isGood = 1;
    const isVisited = Array.from(Array(5), () => Array(5).fill(false));
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (place[i][j] === 'P' && !isVisited[i][j]) {
          isVisited[i][j] = true;
          dfs(i, j, 1, place);
        }
      }
    }

    function dfs(y, x, cnt, place) {
      for (let i = 0; i < 4; i++) {
        const ny = y + dy[i];
        const nx = x + dx[i];
        if (isInRange(ny, nx, place) && !isVisited[ny][nx]) {
          if (place[ny][nx] === 'P' && cnt <= 2) {
            isGood = 0;
            return;
          }
          isVisited[ny][nx] = true;
          dfs(ny, nx, cnt + 1, place);
          isVisited[ny][nx] = false;
        }
      }
    }

    function isInRange(y, x, place) {
      return 0 <= y && y < 5 && 0 <= x && x < 5 && place[y][x] !== 'X';
    }

    answer.push(isGood);
  }

  return answer;
}
