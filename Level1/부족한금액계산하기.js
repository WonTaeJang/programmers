function solution(price, money, count) {
    var answer = -1;

    let cntSum = (1+count)/2*count*price-money;

    if(cntSum > 0){
        return cntSum;
    }
    else
        return 0;

}

solution(3,20,4,10);