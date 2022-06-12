function solution(arr, divisor) {
    let answer = [];

    answer = arr.filter((e) => {
        if(e%divisor == 0){
            return true;
        }
    })

    if(answer.length != 0){
        answer.sort((a,b) => a-b);
    }
    else
        answer.push(-1);

    //console.log(answer);

    return answer;
}

solution([5,9,7,10], 5)
solution([2, 36, 1, 3], 1)
solution([3,2,6], 10)