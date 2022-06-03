function solution(d, budget) {
    var answer = 0;

    // 오름 차순
    d.sort((a,b) => a-b);

    for(let i=0; i<d.length; i++){
        budget -= d[i];
        if(budget < 0){
            break;
        }
        answer++;
    }

    //console.log(d);
    return answer;
}

solution([1,3,2,5,4],9);
solution([2,2,3,3],10);