function solution(x, n) {
    const answer = [];

    for(let i=1; i<=n; i++){
        answer.push(x*i);
    }

    return answer;
}

solution(2,5)   // [2,4,6,8,10]