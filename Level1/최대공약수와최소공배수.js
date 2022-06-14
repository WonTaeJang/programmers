function solution(n, m) {
    var answer = [];
    const GCD = [];
    const twoNum = [n,m];
    twoNum.sort((a,b) => a-b);

    while(GCD.length == 0 || GCD[GCD.length-1] != 1){
        for(let i=n; i>0; i--){
            if(twoNum[0]%i == 0 && twoNum[1]%i == 0){
                twoNum[0] = twoNum[0]/i;
                twoNum[1] = twoNum[1]/i;
                GCD.push(i);
                break;
            }
        }
    }

    // 최대공약수
    answer.push(GCD.reduce((acc, val)=>acc*val,1));

    // 최소공배수
    answer.push(answer[0] * twoNum[0] * twoNum[1]);

    console.log(answer);
    
    return answer;
}

solution(3,12)  // [3,12]
solution(6,12)  // [3,12]
solution(2,5)   // [1,10]