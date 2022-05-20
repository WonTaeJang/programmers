

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let temp = [];

    for(let i = 0; i < A.length;i++){
        if(0 <= A[i]){
            temp[A[i]] = true;
        }
    }

    console.log(temp);

    // for(let i =1; i <= temp.length; i++){
    //     if(undefined =)
    // }
}

solution([1, 3, 6, 4, 1, 2]);
solution([-1,-3, 1]);
