function solution(x) {
    let answer = false;

    let arr = x.toString();
    let placeValue = 0;

    for(let i=0; i<arr.length; i++){
        placeValue += parseInt(arr[i]);
    }

    if(x%placeValue == 0){
        answer = true;
    }

    return answer;
}