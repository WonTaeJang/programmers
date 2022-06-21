function solution(clothes) {
    let answer = 1;
    const list = new Map();

    // 경우의 수 문제
    // 옷 종류에 따라 (A+1)*(B+1)...-1 로 풀면 금방 풀린다.
    // +1 한 이유는 안입는 경우도 있기때문
    // 마지막에 -1을 한 이유는 모두 안입는 경우는 조건에 없기때문

    clothes.map(e => {
        if(list.get(e[1])){
            list.set(e[1],[...list.get(e[1]),e[0]]);
        }
        else{
            list.set(e[1],[e[0]]);
        }
    })

    list.forEach(e=>{

    })

    
    return answer-1;
}

solution([["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]) // 5
//solution([["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]])  // 3