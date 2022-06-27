function solution(n) {
        return answeparseInt((n + '').split('').sort((a,b) => b - a).join(''));
}