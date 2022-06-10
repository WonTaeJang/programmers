function solution(s) {
    var answer = '';

    if(s%2 === 0){
        
        answer = s[s.length/2] + s[s.length/2 + 1];
    }
    else{
        answer = s[Math.floor(s.length/2)];
    }


    return answer;
}

