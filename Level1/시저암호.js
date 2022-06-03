function solution(s, n) {
    var answer = '';

    // 대문자 65~90
    // 소문자 97~122

    for(let i=0; i<s.length; i++){
        if(s[i] != ' '){
            let charCode = s.charCodeAt(i);

            answer += String.fromCharCode(moveN(charCode, n));
        }
        else
            answer += ' ';

    }
    
    console.log(answer)
        
    return answer;
}

// 알파벳 변환
function moveN(charCode, N){
    // 대문자
    if(charCode <= 90){
        if(charCode + N > 90)
            return (charCode + N) - 90 + 65 - 1;
        else
            return (charCode + N)
    }
    else{
        if(charCode + N > 122)
            return (charCode + N) - 122 + 97 - 1;
        else
            return (charCode + N)
    }
}

solution('AB', 1); // BC
solution('z', 1); // a
solution('a B z', 4); // e F d
