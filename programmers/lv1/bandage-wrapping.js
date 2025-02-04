function solution(bandage, health, attacks) {
  let answer = 0;

  let attackMap = new Map(attacks);
  let lastAttack = Math.max(...attackMap.keys());

  const MAX = health;
  let hp = health;
  let success = 0;

  for (let i = 1; i <= lastAttack; i++) {
    if (hp <= 0) break;

    if (!attackMap.has(i)) {
      success++;
      if (success === bandage[0]) {
        hp += bandage[2];
        success = 0;
      }
      hp += bandage[1];
    } else {
      let damage = attackMap.get(i);
      hp -= damage;
      success = 0;
    }

    // 최대 체력을 초과하지 않도록 보정
    if (hp > MAX) hp = MAX;
  }

  answer = hp <= 0 ? -1 : hp;

  return answer;
}
