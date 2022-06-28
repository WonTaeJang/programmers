function solution(citations) {
    let answer = 0;

    const arr = citations.sort((a,b) => a - b);

    for(let i=0; i<arr.length; i++){
        // n편중 h번 이상 인용된 눈문이 h편 이상
        if(arr[i] <= arr.length - i){
            answer = arr[i];
        }
        else{
            break;
        }
    }

    // i = h
    for(let i=0; i<=arr.length; i++){

        // cnt = 인용된 논문 수, h편 이상
        let cnt = 0;
        for(let j=0; j<arr.length; j++){
            if(arr[j] >= i){
                cnt = arr.length - j 
                break;
            }
        }

        if(i <= cnt){
            answer = i;
        }
    }

    console.log(answer);


    return answer;
}


solution([3, 0, 6, 1, 5])   // 3
solution([10, 10, 10, 10, 10])   // 5
solution([0,1,2])   // 1