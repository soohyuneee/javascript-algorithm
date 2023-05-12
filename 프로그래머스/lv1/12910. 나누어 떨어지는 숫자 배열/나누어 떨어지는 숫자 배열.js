function solution(arr, divisor) {
    let answer = arr.sort((a, b) => a - b).filter(v => v % divisor === 0)
    return answer.length ? answer : [-1];
}