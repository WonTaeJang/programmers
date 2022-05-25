function solution(absolutes, signs) {
    var answer = 0;

    absolutes.filter((value, index) => {
        signs[index] ? answer += value : answer -= value
    })
    //console.log(answer);
    return answer;
}

solution([4, 7, 12], [true, false, true]);   // 9
solution([1, 2, 3], [true, false, true]);    // 0