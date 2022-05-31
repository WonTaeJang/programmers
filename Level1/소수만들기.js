function solution(nums) {
    var answer = -1;
    let isUsed = new Array(nums.length);
    isUsed.fill(false);
    let primeCnt = 0;
    
    const isPrime = (number) => {
        if(number < 2) return false;
        for(let i=2; i <= Math.sqrt(number); i++){
            if(number%i == 0) return false;
        }

        return true;
    }
    
    (function sumPrime(arr, depth){
        if(depth > 0){

        }

        if(arr.length == 3) return;

        for(let i=0; i<arr.length-2; i++){

        }
    })(nums,0);


    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    
    return answer;
}

solution([1,2,3,4]) // 1
solution([1,2,7,6,4]) // 4
