function solution(numbers) {
    var answer = 0;
    const arr = new Array(10);
    arr.fill(true);

    numbers.map(e => {
        arr[e] = false;
    })

    for(let i=0; i < 10; i++){
        if(arr[i]){
            answer += i;
        }
    }

    //console.log(answer);


    return answer;
}

solution([1,2,3,4,6,7,8,0]);    // 14
solution([5,8,4,0,6,7,9]);      // 6
