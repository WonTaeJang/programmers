function solution(left, right) {
    var answer = 0;

    for(let i=left; i<=right; i++){
        let cnt = getDivisors(i);
        cnt%2 === 1 ? answer -= i : answer += i;
    }
    

    return answer;
}

function getDivisors(num){
    let sqrt = Math.sqrt(num);
    let count = 0;
    for(let i=1; i<=sqrt; i++){
        if(num%i === 0){
            num/i === i ? count++ : count += 2;
        }
    }
    return count;
}

solution(13, 17)    // 43
//solution(24, 27)    // 52