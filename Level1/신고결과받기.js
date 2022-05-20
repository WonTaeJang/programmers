function solution(id_list, report, k) {
    let reports = [...new Set(report)].map(a=>{return a.split(' ')});
    console.log(reports);


    var answer = new Array(id_list.length);
    answer.fill(0);
    const report_list = {};

    id_list.forEach(report_id => {
        // 신고 받은 유저
        report_list[report_id] = [];
    });

    report.forEach(user => {
        let [user_id, report_id] = user.split(' ');

        if (!report_list[report_id].includes(user_id))
            report_list[report_id].push(user_id);
    })

    for (data in report_list) {
        if (report_list[data].length >= k) {
            report_list[data].forEach(value => {
                answer[id_list.indexOf(value)] += 1;
            })
        }
    }


   // console.log(answer)
    return answer;
}

solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2);

/*
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/