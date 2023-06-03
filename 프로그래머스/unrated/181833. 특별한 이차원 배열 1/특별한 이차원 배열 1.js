function solution(n) {
    let answer = [];
    for (let i = 0; i < n; i++) {
        let numArr = Array(n).fill(0)
        answer.push(numArr.fill(1, i, i+1))
    }
    return answer;
}