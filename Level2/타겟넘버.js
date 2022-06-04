function solution(numbers, target) {
    var answer = 0;
    DFS(0,0);

    function DFS(level, sum){
        if(numbers.length == level){
            if(sum == target){
                answer++;
            }

            return;
        }
        DFS(level+1, sum + numbers[level]);
        DFS(level+1, sum - numbers[level]);
    }

    console.log(answer);

    return answer;
}

solution([1,1], 0)        // 
solution([1,1,1,1,1], 3)        // 5
solution([4,1,2,1], 4)          // 2