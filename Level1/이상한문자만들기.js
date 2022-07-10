function solution(s) {
    let answer = '';
    let cnt = 0;

    for(let i=0; i<s.length; i++){
        if(s[i-1] == undefined || s[i-1] == ' '){
            cnt = 0;
        }

        if(cnt%2 == 0){
            answer += s[i].toUpperCase();
        }
        else{
            answer += s[i].toLowerCase();
        }
        cnt++;
    }

    return answer;
}

solution('try hello world')