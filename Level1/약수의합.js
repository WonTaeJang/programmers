function solution(n) {
    let answer = 0;

    const measureArr = new Set();
    let cnt = parseInt(Math.sqrt(n));

    for(let i=1; i<=cnt; i++){
        // 나누어 떨어지면
        if(n%i == 0){
            measureArr.add(i);
            measureArr.add(parseInt(n/i));
        }
    }

    answer = [...measureArr].reduce((acc, cur, idx) =>{
        return acc += cur;
    },0)
    //console.log(answer)

    return answer;
}

solution(12)        // 28
solution(9)        // 13
