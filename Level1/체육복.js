function solution(n, lost, reserve) {
    var answer = 0;
    let student = new Array(n);
    let list = [];
    let lendCount = 0;
    student.fill(0);

    // 0: 일반, -1: 없음, 1: 여유
    lost.map(e => {
        student[e-1] = -1;
    })
    
    reserve.sort();


    reserve.map(e=>{
        if(student[e-1] == -1){
            student[e-1] = 0;
            lendCount++;
        }
        else{
            list.push(e);
        }
    })

    list.map(e => {
        if(student[e-2] == -1){
            student[e-2] = 0;
            lendCount++;
        }
        else{
            if(student[e] == -1){
                student[e] = 0;
                lendCount++;
            }
        }
    })


    //console.log(student);
    //console.log(n - (lost.length - lendCount));
    return n - (lost.length - lendCount);
}

// solution(5, [2,4], [1,3,5])    // 5
// solution(5, [2,4], [3])    // 4
// solution(4, [2, 4], [1, 3])      // 1
// solution(4, [2, 4], [3, 1] )      // 3
solution(5, [2,3, 4], [3, 4,5] )      // 3
// solution(3, [1,3],[2])      // 2
// solution(10, [3,4,5], [1,6,7])      // 2