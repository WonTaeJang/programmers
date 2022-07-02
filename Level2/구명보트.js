function solution(people, limit) {
    // 구명보트는 한번에 최대 2명밖에 탈수 없다. 
    people.sort((a,b)=>b-a);
    let boat = 0;
    
    while(people.length > boat){
        if(people[boat] + people[people.length-1] > limit){
            boat++;
        }
        else{
            boat++;
            people.pop();
        }
    }

    return boat;
}

solution([70, 50, 80, 50], 100)  //	100	3
solution([70, 80, 50], 100)	//100	3