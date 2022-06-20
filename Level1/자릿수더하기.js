function solution(n)
{
    let answer = n.toString().split('').map((x)=>parseInt(x)).reduce((acc,curr) => acc + curr,0);
    

    //console.log(answer)
    return answer;
}

solution(123);
solution(987);