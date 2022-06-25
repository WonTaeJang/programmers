function solution(n) {
    let answer = [];
    answer = (n + '').split('').map(e=>{
        return parseInt(e);
    }).reverse();

    return answer;
}