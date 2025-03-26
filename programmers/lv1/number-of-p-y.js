function solution(s) {
  let countP = 0;
  let countY = 0;
  const chars = s.split('');

  chars.forEach((value) => {
    if (value === 'p' || value === 'P') {
      countP++;
    }

    if (value === 'y' || value === 'Y') {
      countY++;
    }
  });

  return countP === countY ? true : false;
}
