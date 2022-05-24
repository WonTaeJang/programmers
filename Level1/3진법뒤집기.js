function solution(n) {
    var answer = 0;
    var n3Num = n.toString(3);

    for(let i=0; i<n3Num.length; i++){
        let n3 = parseInt(n3Num[i]);
        
        if(n3Num[i] !== 0){
            answer += Math.pow(3,i) * n3;
        }        
    }

    return answer;
}

solution(125);