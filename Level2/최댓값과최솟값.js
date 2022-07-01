function solution(s) {
    let arr = s.split(' ')

    return `${Math.min(...arr)} ${Math.max(...arr)}`;
}

solution("1 2 3 4") // "1 4"
solution("-1 -2 -3 -4") // "-4 -1"
solution("-1 -1") // "-1 -1"