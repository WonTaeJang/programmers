function solution(participant, completion) {
    var answer = '';

    participant.sort();
    completion.sort();

    for(let i=0; i<participant.length; i++){
        if(participant[i] !== completion[i]){
            answer = participant[i];

            break;
        }
    }

    //console.log(answer);

    return answer;
}

//solution(["leo", "kiki", "eden"], ["eden", "kiki"]) // leo
solution(["mislav", "stanko", "mislav", "ana"],["stanko", "ana", "mislav"]);