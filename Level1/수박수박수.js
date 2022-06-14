function solution(n) {
    let answer = '';

    for(let i=1; i<=n; i++){
        if(i%2==1){
            answer += '수';
        }
        else
            answer += '박';
    }

    return answer;
}

solution(4) // 수박수박