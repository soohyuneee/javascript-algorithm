function solution(n) {
    let numArr = n.toString().split('').map(v => parseInt(v));
    return numArr.reduce((a, c) => a + c);
}