function solution(str1, str2) {
    // 영문자 쌍만 유효하므로 대문자로 변환
    str1 = str1.toUpperCase();
    str2 = str2.toUpperCase();
 
    // 문자열을 두 글자씩 끊어 다중집합을 만드는 함수
    function makeMultiSet(str) {
        const multiSet = [];
        for (let i = 0; i < str.length - 1; i++) {
            const pair = str.substring(i, i + 2);
            if (pair.match(/^[A-Z]{2}$/)) {
                multiSet.push(pair);
            }
        }
        return multiSet;
    }
 
    const multiSet1 = makeMultiSet(str1);
    const multiSet2 = makeMultiSet(str2);
 
    // 두 다중집합의 원소 개수를 세는 함수
    function countElements(arr) {
        const count = {};
        arr.forEach(element => {
            count[element] = (count[element] || 0) + 1;
        });
        return count;
    }
 
    const count1 = countElements(multiSet1);
    const count2 = countElements(multiSet2);
 
    // 교집합과 합집합을 구함
    let intersectionSize = 0;
    let unionSize = 0;
 
    const allElements = new Set([...multiSet1, ...multiSet2]);
    allElements.forEach(element => {
        const countIn1 = count1[element] || 0;
        const countIn2 = count2[element] || 0;
        intersectionSize += Math.min(countIn1, countIn2);
        unionSize += Math.max(countIn1, countIn2);
    });
 
    // 자카드 유사도 계산
    const jaccardSimilarity = unionSize === 0 ? 1 : intersectionSize / unionSize;
 
    // 유사도에 65536을 곱하고 정수부만 출력
    return Math.floor(jaccardSimilarity * 65536);
}