function solution(board) {
  const width = board[0].length;
  const height = board.length;
  let answer = 0;

  for (let y = 0; y < height; y++) {
    if (board[y].reduce((a, c) => a + c, 0) > 0) {
      answer = 1;
      break;
    }
  }

  for (let y = 1; y < height; y++) {
    for (let x = 1; x < width; x++) {
      if (board[y][x] > 0) {
        board[y][x] =
          Math.min(board[y - 1][x], board[y][x - 1], board[y - 1][x - 1]) + 1;
        answer = Math.max(answer, board[y][x]);
      }
    }
  }
  return answer ** 2;
}
