function solution(name) {
    let answer = 0;
    let min = name.length-1;

    for(let i=0; i<name.length; i++){
        if(name[i] !== 'A'){
            answer += getAlphabetCnt(name[i]);
        }
    }

    for(let i=0; i<name.length; i++){
        let nextIndex = i+1;

        while(nextIndex < name.length && name[nextIndex] === 'A'){
            nextIndex++;
        }

        // 조이스틱 좌우 제어
        min = Math.min(min, (i*2) + name.length - nextIndex);   // 우측 -> 좌측
        min = Math.min(min, ((name.length - nextIndex)*2) + i); // 좌측 -> 우측
    }

    return answer + min;
}

// 조이스틱 위 아래 제어
function getAlphabetCnt(apb){
    let A = 65;
    let char = apb.charCodeAt(0);
    
    return (char - A) > 13? 26 - (char - A) : (char - A)
}

//solution("JEROEN")  // 56
//solution("JAN")     // 23
//solution("BBBAAAAAABA")     
solution("BBBBAAAABA")     
solution("AAAAABBAAAAAAABAAA")     
solution("AAAAABBAAAAAAAAAA")     