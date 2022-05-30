function solution(priorities, location) {
    let count = 0;
    const arr = priorities.map((value,i) => {
        return {id:value, state: (location == i? true : false)}
    });

    while(arr.length > 0){
        let cnt = arr.filter((value,i)=>{
            if(i != 0 && value.id > arr[0].id){
                return true
            }
            return false
        }).length;

        let temp = arr.shift();

        if(cnt > 0){    
            arr.push(temp);
        }
        else{
            count++;

            if(temp.state){
                break;
            }
        }
    }


    console.log(count);
    return count;
}

solution([1,1,9,1,1,1], 0)  // 5