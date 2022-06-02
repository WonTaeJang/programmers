function solution(s) {
    var answer = 0;
    
    // 반복 횟수 
    // 문자 길이 == set 개수(중복 제거)이면 N-1 or N
    let count = getCount(s);
    console.log(count);

    return answer;
}

function getCount(s){
    let cnt = new Set(s.split(''));

    return s.length == cnt.size ? cnt.size -1 : cnt.size;
}

solution("abac");