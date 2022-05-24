function solution(array, commands) {
    var answer = [];
    commands.map(arr => {
        let i = arr[0];
        let j = arr[1];
        let k = arr[2];

        const newArr = array.slice(i-1,j);
        newArr.sort((a,b) => {
            return a-b;
        });
        // console.log(newArr);

        answer.push(newArr[k-1])
       
        
    })
    
    return answer;
}

solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]) // [5, 6, 3]