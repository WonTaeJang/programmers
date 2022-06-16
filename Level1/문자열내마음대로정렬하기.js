function solution(strings, n) {
    strings.sort((a,b) => {
        if(a[n] > b[n]) return 1;
        if(a[n] === b[n]){
            if(a > b) return 1;
            if(a === b) return 0;
            if(a < b) return -1;
        } 
        if(a[n] < b[n]) return -1;
    })

    //console.log(strings)

    return strings;
}

solution(["sun", "bed", "car"],1)   // ["car", "bed", "sun"]
solution(["abce", "abcd", "cdx"],2) // ["abcd", "abce", "cdx"]