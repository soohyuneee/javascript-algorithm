function solution(n){
    return String(n).split('').reduce((a, c) => a + parseInt(c), 0);
}