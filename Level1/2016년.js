function solution(a, b) {
    const day = ['THU', 'FRI','SAT','SUN','MON','TUE','WED'];
    const Month = [31,29,31,30,31,30,31,31,30,31,30,31];

    
    let month_cnt = Month.reduce((acc, cur, index) => {
        if(index < a-1){
            acc = acc + cur;
        }

        return acc;
    }, 0)

    let day_cnt = (month_cnt + b)%7;

    return day[day_cnt];
}

solution(5,24)  // tue