function solution(sequence, k) {
  let [left, right] = [0, 0];
  let sum_ = sequence[0];
  let ret = [0, sequence.length];

  while (left < sequence.length) {
    if (sum_ < k && right < sequence.length) {
      sum_ += sequence[++right];
    } else if (sum_ === k && right - left < ret[1] - ret[0]) {
      ret = [left, right];
      sum_ += sequence[++right];
    } else sum_ -= sequence[left++];
  }
  return ret;
}
