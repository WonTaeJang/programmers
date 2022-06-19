function solution(n)
{
    let answer = 0; 
    let 나머지,몫;

    do{
        나머지 = n%10;
        몫 = n/10;

        answer += parseInt(나머지);
        console.log(parseInt(나머지));
        n = n/10;
    }while(n > 1)

    console.log(answer)
    return answer;
}

solution(123);
solution(987);