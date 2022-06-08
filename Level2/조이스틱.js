function solution(name) {
    let result = 0;
    let list = Array(name.length);
    list.fill(false);

    for(let i=0; i<name.length; i++){
        if(name[i] === 'A')
            list[i] = true;
    }

    // A 값이 없을경우
    if(!list.includes(true)){
        for(let i=0; i<name.length; i++){
            result += getAlphabetCnt(name[i]);
            if(i !== name.length-1) 
                result++;
        }
    }
    else{
        // 우측 이동시 고려사항
        // SKAAAAAB 이런 값이 오면 왼쪽으로 먼가 갈지 오른쪽으로 먼저갈지 판단
        // 이동 후 반대방향으로 틀지 그대로 직진 할지 판단
    }

    console.log(list);
    console.log(result);

    //return answer;
}

// 조이스틱 위 아래 제어
function getAlphabetCnt(apb){
    let A = 65;
    let char = apb.charCodeAt(0);
    
    return (char - A) > 13? 26 - (char - A) : (char - A)
}

solution("JEROEN")  // 56
solution("JAN")     // 23