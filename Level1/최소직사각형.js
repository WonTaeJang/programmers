function solution(sizes) {
    let maxW = 0; 
    let maxH = 0;

    sizes.map(e=>{
        // 내림차순
        e.sort((a,b) => b-a);

        
        if(e[0] > maxW){maxW=e[0]}
        if(e[1] > maxH){maxH=e[1]}

        
        //console.log(e);

    })

    return maxH*maxW;
}

solution([[60, 50], [30, 70], [60, 30], [80, 40]])  // 4000
solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]])  // 120
solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]])  // 133