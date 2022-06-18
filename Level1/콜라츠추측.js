function solution(num) {
    let cnt = 0;
    while(cnt < 500){
        if(num%2 == 0){
            num = num/2;
        }
        else{
            num = num*3 + 1;
        }

        cnt++;

        if(num === 1){
            break;
        }
    }

    if(cnt === 500){
        cnt = -1;
    }

    return cnt;
}

solution(6) //	8
solution(16)    //	4
solution(626331)    //	-1