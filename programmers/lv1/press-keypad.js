function solution(numbers, hand) {
 
    let answer = '';
    let leftThumb = 10, rightThumb = 12;
    // 왼손은 10, 오른손은 12로 시작하여 계산 규칙에 맞게 만들어줌
    
    for(let i=0; i<numbers.length; i++){  

        if(numbers[i]%3 === 1){
        // 1, 4, 7 버튼
            answer += 'L';
            leftThumb = numbers[i];
        }
        else if(numbers[i]%3 === 0 && numbers[i] !== 0){
        // 3, 6, 9 버튼
            answer += 'R';
            rightThumb = numbers[i];
        }
        else{
        // 2, 5, 8, 0 버튼
            if(numbers[i] === 0) numbers[i] = 11; // 0을 11로 설정하여 계산에 용이하게 변경
            
            let tmpL = Math.abs(numbers[i]-leftThumb);
            let tmpR = Math.abs(numbers[i]-rightThumb);
            // 손가락과 눌러야하는 버튼의 거리를 구함
            
            tmpL = Math.floor(tmpL/3) + Math.floor(tmpL%3);
            tmpR = Math.floor(tmpR/3) + Math.floor(tmpR%3);
            // 문제의 그 식..
            // 거리를 나눈 몫과 나머지를 더하면 한 쪽 손가락이 2, 5, 8, 0에 위치하더라도 동일한 거리값을 구할 수 있음
       
            if(tmpL === tmpR){
            // 거리가 같다면 주로 사용하는 손
                if(hand === 'right'){
                    answer += 'R';
                    rightThumb = numbers[i];
                }
                else{
                    answer += 'L';
                    leftThumb = numbers[i];
                } 
            }
            else if(tmpL < tmpR){
                answer += 'L';
                leftThumb = numbers[i];
            }
            else{
                answer += 'R';
                rightThumb = numbers[i];
            }
        }
    }
    return answer;
}