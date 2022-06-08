function solution(s){
    var answer = true;
    let list = [0,0];   // P, S
    
    for(let i=0; i<s.length; i++){
        switch(s[i]){
            case 'p':
            case 'P': list[0]++; break;
            case 'y': 
            case 'Y': list[1]++; break;
            default:
        }
    }
    //console.log(list)

    return list[0] == list[1]? true:false;
}

solution("pPoooyPY") // true;
//solution("Pyy")     // false;

