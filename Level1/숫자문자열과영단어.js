function solution(s) {
    let answer = s;

    let strNum = ['zero','one','two', 'three', 'four', 'five', 'six', 'seven', 'eight','nine']
    
    for(i = 0; i < strNum.length; i++){
        let arr = answer.split(strNum[i]);
        answer = arr.join(i);
    }

    
    //console.log(answer);
    parseInt
    return answer;
}

/*
0	zero
1	one
2	two
3	three
4	four
5	five
6	six
7	seven
8	eight
9	nine

"one4seveneight"	1478
"23four5six7"	234567
"2three45sixseven"	234567
"123"	123

*/ 

solution("one4seveneight");
solution("23four5six7");
solution("2three45sixseven");
solution("123");

/*
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/