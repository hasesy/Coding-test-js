class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return index * 2 + 1;
  }

  getRightChildIndex(index) {
    return index * 2 + 2;
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (
      this.getParentIndex(index) >= 0 &&
      this.heap[this.getParentIndex(index)] > this.heap[index]
    ) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return root;
  }

  heapifyDown(index) {
    let smallest = index;
    const leftChild = this.getLeftChildIndex(index);
    const rightChild = this.getRightChildIndex(index);

    if (
      leftChild < this.heap.length &&
      this.heap[leftChild] < this.heap[smallest]
    ) {
      smallest = leftChild;
    }

    if (
      rightChild < this.heap.length &&
      this.heap[rightChild] < this.heap[smallest]
    ) {
      smallest = rightChild;
    }

    if (smallest !== index) {
      this.swap(index, smallest);
      this.heapifyDown(smallest);
    }
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }
}

function solution(scoville, K) {
  const minHeap = new MinHeap();

  for (let num of scoville) {
    minHeap.push(num);
  }

  let mixCount = 0;

  while (minHeap.peek() < K) {
    if (minHeap.size() < 2) {
      return -1;
    }

    const first = minHeap.pop();
    const second = minHeap.pop();
    const newScoville = first + second * 2;
    minHeap.push(newScoville);
    mixCount += 1;
  }

  return mixCount;
}
