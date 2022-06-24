function solution(n) {
    var answer = -1;
    let sprt = Math.sqrt(n);
    if(Number.isInteger(sprt)){
        answer = Math.pow(sprt+1,2)
    }

    return answer;
}