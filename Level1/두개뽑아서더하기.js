function solution(numbers) {
    var answer = [];
    let list = new Set();

    for(let i=0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            list.add(numbers[i] + numbers[j]);
        }
    }
    answer = [...list].sort((a,b)=>a-b);
    //console.log(answer);

    return answer;
}

solution([2,1,3,4,1])   // [2,3,4,5,6,7]