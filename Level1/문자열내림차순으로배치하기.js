function solution(s) {
    let answer = '';
    let arr = s.split('');
    arr.sort(function(a, b) {
        if(a < b) return 1;
        if(a > b) return -1;
        return 0;
      });

    /*
      arr.sort().reverse();
    */
    //console.log(list);

    return answer = arr.join('');
}

solution("Zbcdefg");