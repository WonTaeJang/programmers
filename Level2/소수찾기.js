function solution(numbers) {
    const N = numbers.length;
    const judged = {};
    const isUsed = new Array(N);
    isUsed.fill(0);

    const isPrime = (number) => {
        let num = number
        let result = true;

        if(num < 2) return false;
        if(num == 2) return true;
        if(num%2 == 0) return false;

        for(let i=2; i<=Math.sqrt(num); i++){
            if(num%i == 0){
                result = false;
                break;
            }
        }

        return result;
    }

    (function depth_func(depth, number){
        if(depth > 0){
            const num = parseInt(number);

            if(!judged[num] && isPrime(num)){
                judged[num] = 1;
            }
        }

        if(depth == N) return;

        for(let i=0; i<N; i++){
            if(isUsed[i]) continue;
            isUsed[i] = 1;
            depth_func(depth + 1, number + numbers[i]);
            isUsed[i] = 0;
        }
    })(0, '')


    console.log(judged);
    console.log(Object.keys(judged).length);


    return Object.keys(judged).length;
}

solution("1231");     // 7, 17, 71 => 3
//solution("011");    // 11, 101   => 2