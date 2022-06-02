function solution(numbers) {
    var answer = '';

    // 숫자를 문자로 바꾸어준다.
    let arr = numbers.map(e=>e+'')

    // "303" "330" 문자를 합쳐서 비교한다. 
    answer = arr.sort((a,b) => (b+a)-(a+b)).join('')

    // console.log(arr);
    // console.log(answer);

    return answer[0]==='0'? '0' : answer;
}

solution([0,0])
solution([6,10,2])  // 6210
solution([30,3,34,5,9]) // 9534330
solution([3,34,30,5,9]) // 9534330