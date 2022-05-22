function solution(s) {
    var answer = 0;
    
    if (s.length === 1) return 1;
    let result = [];
    let count = ((s.length%2) == 0 ? s.length/2 : (s.length-1)/2);
    // 문자열 맨앞부터 시작하여 짤라야함
    // 문자열 길이의 절반 그리고 짝수개수가 최대 문자 자를수있는 갯수

    let format = 1;

    for(let i=1; i <= count; i++){
        let str = '';
        let cnt = 1;
        for(let j = 0; j < s.length; j+=i){
            const current = s.substr(j,i);
            const next = s.substr(j+i, i);

            if(current == next){
                cnt++
            }else{
                str = cnt > 1? str + cnt + current : str + current;
                cnt = 1;
            }
        }
        result.push(str.length);
    }

    //console.log(...result);
    console.log(Math.min(...result));

    return answer;
}

solution("aabbaccc");
solution("ababcdcdababcdcd");
solution("abcabcdede");
solution("abcabcabcabcdededededede");
solution("xababcdcdababcdcd");

/*
"aabbaccc"	7
"ababcdcdababcdcd"	9
"abcabcdede"	8
"abcabcabcabcdededededede"	14
"xababcdcdababcdcd"	17
*/