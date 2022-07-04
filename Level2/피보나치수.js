function solution(n) {
    return Fibonacci(n)%1234567;
}

/*
    모듈러 연산: (A + B)%C = (A%C + B%C)%C
*/ 

function Fibonacci(n){
    // if(n < 2){
    //     return n;
    // }

    // return (Fibonacci(n-2)%1234567 + Fibonacci(n-1)%1234567);

    let arr = [];
    arr[0] = 0;
    arr[1] = 1;

    for(let i=2; i<=n; i++){
        arr[i] = arr[i-1]%1234567 + arr[i-2]%1234567;
    }

    return arr[n];
}

console.log(Fibonacci(3))
console.log(Fibonacci(4))
console.log(Fibonacci(5))
console.log(Fibonacci(6))