function solution(board, moves) {
/*
    [0,0,0,0,0],
    [0,0,1,0,3],
    [0,2,5,0,1],
    [4,2,4,4,2],
    [3,5,1,3,1]
*/
    let stack = [];
    let count = 0;
    let height = board.length;
    
    moves.map(e => {
        for(let i=0; i<height; i++){
            let num = board[i][e-1];
            if(num != 0){                

                if(stack != ''){
                    if(stack[stack.length-1] == num){
                        stack.pop();
                        count += 2;
                    }
                    else{
                        stack.push(num);
                    }
                }
                else{
                    stack.push(num);
                }  
                console.log(num,stack)
                board[i][e-1] = 0;
                break;
            }
        }
    })
    
    //console.log(height, width);
    // console.log(board);
    // console.log(stack);
    // console.log(count);
    return count;
}

// 부서진 인형의 개수 4
solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]);