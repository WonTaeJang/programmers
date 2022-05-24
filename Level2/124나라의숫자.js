function solution(n) {
    var answer = [];
    var arr = [4,1,2];
    
    // 

    while(n > 3)
    {
        answer.push(arr[n%3]);
        if(n%3==0){
            n = parseInt(n/3)-1;
        }
        else{
            n = parseInt(n/3);
        }   
    }

    answer.push(arr[n%3]);
    return answer.reverse().join('');
}

solution(1);
solution(2);
solution(3);
solution(4);
solution(6);
solution(10)
solution(11)
solution(12)
solution(15);