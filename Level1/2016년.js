function solution(a, b) {
    var answer = '';
    const day = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
    const Month = [31,29,31,30,31,30,31,31,30,31,30,31];

    
    month_cnt = Month.reduce((acc, cur, index) => {
        if(index < a-1){
            acc = acc + cur;
        }

        return acc;
    }, 0)

    return day[(month_cnt + b)%7-1];
}

solution(5,24)  // tue