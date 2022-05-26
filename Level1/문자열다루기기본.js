function solution(s) {
    var answer = true;
    if(s.length == 4 || s.length == 6){
        s.replace(/[0-9]/g,'') == '' ? answer=true : answer = false;
    }
    else{
        answer = false;
    }
    

    return answer;
}

solution('a1234')