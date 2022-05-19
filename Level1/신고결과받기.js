function solution(id_list, report, k) {
    var answer = []
    var answer_list = {}
    var list = {};
    // 정지 기준이 되는 횟수로 k값이 넘어서야 id_list에 결과메일을 받을 수 있음.
    
    // id list를 object list로 변경
    let cnt = 0;
    id_list.forEach((e)=>{
        answer_list[e] = {id:cnt++, count:0};
    })

    // 신고된 ID를 기준으로 object arr를 만든다. 
    for(let i=0; i<report.length; i++){
        let [rPorter, rPorted] = report[i].split(' ');

        if(list.hasOwnProperty(rPorted))
        {
            list[rPorted].add(rPorter);
        }
        else
        {
            let reporter = new Set()
            reporter.add(rPorter);
            list[rPorted] = reporter;
        }
    }

    //k값을 기준으로 true false 판단
    for(value in list){
        //console.log(list[value]);
        if(list[value].size == k){
            list[value].forEach(e=>{
                answer_list[e].count++;
            })
        }
    }

    // 결과값 대입
    for(value in answer_list){
        answer[answer_list[value].id] = answer_list[value].count;
    }

    return answer;
}

solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 2);