function solution(progresses, speeds) {
    var answer = [];

    // 작업 소요시간 계산
    let arr = progresses.map((value, index) => {
        // 처리 기간
        let date = (100 - value)%speeds[index] == 0 ? parseInt((100 - value)/speeds[index]) : parseInt((100 - value)/speeds[index]) + 1;
        return date;
    })

    let processDate = 0;
    let p_cnt = 0;

    arr.map((value)=>{
        if(value > processDate){
            processDate = value;

            if(answer.length == 0){
                p_cnt = 0;
            }
            else{
                p_cnt++;
            }

            answer.push(1);
        }
        else{
            answer[p_cnt]++;
        }
    })

    //console.log(answer);
    return answer;
}

//solution([93, 30, 55], [1, 30, 5])      // [2, 1]
//solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])  // [1, 3, 2]
solution([95,95,95,95], [4,3,2,1]);