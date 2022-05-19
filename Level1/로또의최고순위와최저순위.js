function solution(lottos, win_nums) {
    var answer = [];

    // 알려지지 않은 숫자 갯수
    let unknown_cnt = 0;
    let correct_cnt = 0;

    // key: 일치 개수, value: 등수
    const rank = [6,6,5,4,3,2,1]

    lottos.map(e=>{
        if(e == 0){
            unknown_cnt += 1;
        }
    })

    lottos.map(i =>{
        win_nums.map(j =>{
            if(i != 0){
                if(i == j){
                    correct_cnt += 1;
                }
            }
        })
    })

    // 최대 등수
    answer.push(rank[correct_cnt + unknown_cnt])

    // 최소 등수
    answer.push(rank[correct_cnt])

    //console.log(answer);

    return answer;
}

solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]);

/*
순위    당첨 내용
1	    6개 번호가 모두 일치
2	    5개 번호가 일치
3	    4개 번호가 일치
4	    3개 번호가 일치
5	    2개 번호가 일치
6(낙첨)	 그 외

[44, 1, 0, 0, 31, 25]	[31, 10, 45, 1, 6, 19]	    [3, 5]
[0, 0, 0, 0, 0, 0]	    [38, 19, 20, 40, 15, 25]	[1, 6]
[45, 4, 35, 20, 3, 9]	[20, 9, 3, 45, 4, 35]	    [1, 1]

*/

/*
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/