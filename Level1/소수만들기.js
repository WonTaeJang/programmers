function solution(nums) {
    let len = nums.length;
    let primeCnt = 0;
    
    const isPrime = (number) => {
        if(number < 2) return false;
        for(let i=2; i <= Math.sqrt(number); i++){
            if(number%i == 0) return false;
        }

        return true;
    }
    
    for(let i=0; i<len; i++){
        for(let j=i+1; j<len; j++){
            for(let k=j+1; k<len; k++){
                let sum = nums[i] + nums[j] + nums[k];
                if(isPrime(sum)){
                    primeCnt++
                }
            }
        }
    }

    
    return primeCnt;
}

solution([1,2,3,4]) // 1
solution([1,2,7,6,4]) // 4
