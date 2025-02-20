function solution(picks, minerals) {
    let answer = 1000
    const tiredList = [
      [1, 1, 1],
      [5, 1, 1],
      [25, 5, 1],
    ]
    const max = Math.min((picks[0] + picks[1] + picks[2]) * 5, minerals.length)
    const DFS = (level, sum) => {
      if (level === max) {
        answer = Math.min(sum, answer)
      } else {
        for (let i = 0; i < 3; i++) {
          if (picks[i] > 0) {
            picks[i]--
            let tired = 0
            for (let j = 0; j < 5; j++) {
              if (level + j === max) {
                answer = Math.min(tired + sum, answer)
                break
              }
              if (minerals[level + j] === 'diamond') tired += tiredList[i][0]
              else if (minerals[level + j] === 'iron') tired += tiredList[i][1]
              else tired += tiredList[i][2]
            }
            if (level + 5 <= max) DFS(level + 5, sum + tired)
            picks[i]++
          }
        }
      }
    }
    DFS(0, 0)
    return answer
  }
  