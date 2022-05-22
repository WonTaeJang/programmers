function solution(answers) {
    var answer = [];
    var arr = new Array(3);
    function func(id, arr){
        this.id = id;
        this.arr = arr;
        this.correct = 0;
    }

    arr[0] = new func(1, [1,2,3,4,5]);
    arr[1] = new func(2, [2,1,2,3,2,4,2,5]);
    arr[2] = new func(3, [3,3,1,1,2,2,4,4,5,5]);

    for(let i=0; i<answers.length; i++){
        for(let j=0; j < arr.length; j++){
            let len = arr[j].arr.length;
            if(answers[i] === arr[j].arr[i%len]){
                arr[j].correct++;
            }
        }
    }

    // 등수 매기기
    let max = Math.max(arr[0].correct, arr[1].correct, arr[2].correct,);
    if(arr[0].correct === max){answer.push(1)}
    if(arr[1].correct === max){answer.push(2)}
    if(arr[2].correct === max){answer.push(3)}

    console.log(answer);
    return answer;
}

solution([1,2,3,4,5]);  // [1]
solution([1,3,2,4,2]);  // [1,2,3]