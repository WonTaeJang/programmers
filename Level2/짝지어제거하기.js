function solution(s)
{
    let arrStack = [];
    if(s.length%2 === 1) return 0;

    for(let i=0; i<s.length; i++){
        if(arrStack.length == 0){
            arrStack.push(s[i]);
        }
        else{
            if(s[i] === arrStack[arrStack.length-1]){
                arrStack.pop();
            }else{
                arrStack.push(s[i]);
            }
        }

    }

    console.log(arrStack);

    return 1;
}

solution('baabaa');
solution('cbaabaaa');