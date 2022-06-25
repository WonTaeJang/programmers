function solution(arr) {
    let answer = [];

    if(arr.length == 1){
        answer.push(-1);
    }
    else{
        let min = Math.min(...arr);
        answer = arr.filter(e=>{
            if(e === min){
                return false;
            }
            return true;
        })
    }

    return answer;
}

solution([4,3,2,1]) // [4,3,2]
solution([10])      // [-1]