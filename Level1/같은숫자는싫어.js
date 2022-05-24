function solution(arr)
{
    var answer = [];

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    answer = arr.filter((number, index, target) => {
        if(target[index+1] == number){
            return false;
        }
        else
            return true;
    })
    
    //console.log(answer)

    return answer;
}

solution([1,1,3,3,0,1,1])   // [1,3,0,1]
solution([4,4,4,3,3])       // [4,3]