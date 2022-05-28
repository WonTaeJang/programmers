function solution(n) {
    var answer = 0;
    // 홀수 , 짝수
    if(n%2 === 1){return 2;}

    for(let i=3; i<n; i+=2){
        if(n%i == 1){
            answer = i;
            break;
        }
    }

    //console.log(answer);
    return answer;
}

solution(10)    // 3
solution(11)    // 3
solution(12)    // 11