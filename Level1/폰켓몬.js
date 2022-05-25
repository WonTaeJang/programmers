function solution(nums) {
    let len = nums.length/2;
    const arr = new Set(nums);

    if(arr.size >= len)
        return len;
    else
        return arr.size;
}

solution([3,3,3,2,2,4]);