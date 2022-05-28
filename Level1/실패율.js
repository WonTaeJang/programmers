function solution(N, stages) {
    var answer = [];

    const failRate = new Array(N);
    failRate.fill(0);

    let cnt = stages.length;
    for(let i=0; i<stages.length; i++){
        if(stages[i] <= N)
            failRate[stages[i]-1]++
    }

    // 실패율 계산
    const failRate2 = failRate.map((value, i) => {
        let result;
        value === 0? result = 0 : result = value/cnt;
        cnt -= value;

        return {id:i, rate:result}
    })

    failRate2.sort((a,b)=>{
        return b.rate-a.rate
    })

    for(value of failRate2){
        answer.push(value.id+1);
    }
    //console.log(answer)
    return answer;
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3])   // [3,4,2,1,5]
solution(4,	[4,4,4,4,4])    // [4,1,2,3]