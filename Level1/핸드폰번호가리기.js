function solution(phone_number) {
    let len = phone_number.length;
    return '*'.repeat(len-4) + phone_number.substring(len-4);
}

solution('01033334444') // *******4444