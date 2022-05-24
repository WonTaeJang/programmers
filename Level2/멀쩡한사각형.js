function solution(w, h) {
    if(w == h){
        return (w*h - w);
    }

    // 최대공약수가 1일떄 
    // 대각선에 접하는 면은 가로의 개수와 세로의 개수만큼 사각형이 갈라진다. 
    // w와 h의 최대공약수가 1일때 잘라지는 사각형의 개수는 w + h -1 이다. 
    // -1을 한 이유는 가로 개수와 세로개수를 보면 겹치는 부분이 있기 때문

    // 공식: w*h - g*(w/g + h/g -1) = w*h - (w+h-g)
    let max = Math.max(w,h);
    let min = Math.min(w,h);

    let g = gcd(max,min);
    //console.log(g);
    return w*h-(w+h-g);
}

function gcd(a,b){
    if(b===0) return a;

    return gcd(b,a%b);
}

solution(12,8);