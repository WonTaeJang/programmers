function solution(s){
    let answer = true;

    let left = s.match(/\(/g);
    let right = s.match(/\)/g);
    let cnt = 0;

    if(left.length !== right.length) return false
    if(s[0] == ")") return false
    if(s[s.length-1] == "(") return false

    for(let i=0; i<s.length; i++){
        if(s[i] === "(") cnt++;
        else if(s[i] === ")"){
            cnt--;
            if(cnt < 0) return false;
        }
    }

    if(cnt !== 0) return false;

    return answer;
}


console.log(solution("()()"))    // true 
console.log(solution("(())()"))    // true 
console.log(solution(")()("))    // false 
console.log(solution("(()("))    // false 

  
    
    
    